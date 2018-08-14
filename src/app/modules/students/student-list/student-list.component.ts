import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { ApiService, ApiParam } from './../../../core/services/api.service';
import { Student } from '../../../core/models/student.model';
import { Subject } from 'rxjs/Subject';
import { MdDialogRef, MdDialog, MdSnackBar } from '@angular/material';;

@Component({
  selector: 'erp-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  studentTableColumns = ['simage', 'sno', 'firstName', 'lastName', 'emailId', 'admissionDate', 'status', 'action'];
  studentsDataSource: StudentsDataSource;
  statuses = {
    0: 'Incomplete',
    1: 'Active',
    2: 'Archived'
  };

  selectedStatus : number = 0;
  students: Array<Student>;

  //Delete Student Dialog
  dialogRef: MdDialogRef<DeleteStudentComponent>;

  private subject: Subject<String> = new Subject();

  constructor(
    private api: ApiService,
    private dialog: MdDialog) {

    this.subject
      .debounceTime(1000)
      .subscribe(name => {
        const apiParams = {
          queryParams: {
            name: name // should be changed to name or q
          }
        };

        this.loadStudents(apiParams);
      });
  }

  ngOnInit() {
    this.loadStudents();
    
  }

  onSearchKeyUp(text) {
    this.subject.next(text);
  }

  loadStudents(apiParams?: ApiParam) {

    this.api
      .request('GET_ALL_STUDENTS', apiParams)
      .subscribe(students => {
        this.studentsDataSource = new StudentsDataSource(<Student[]>students);
      });
  }

  onFilterStudent(value) {
    const apiParams = {
      queryParams: {
        status: value
      }
    };

    this.loadStudents(apiParams);
  }

  onArchiveStudent(student: Student): void {

    this.dialogRef = this.dialog.open(DeleteStudentComponent, {
      disableClose: true,
      height: '200px',
      width: '400px',
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
      if (result === 'Delete!') {
        this.archiveStudent(student);
      }
    });
  }

  archiveStudent(student: Student): void {
    const apiParams = { 'pathParams': { 'STUDENTID': student.id } };

    this.api
      .request('ARCHIVE_STUDENT', apiParams)
      .subscribe(student => {
        this.loadStudents();
      });
  }


}

@Component({
  selector: 'erp-delete-student-dialog',
  template: `
  <h2 >Archive Student</h2>
  <md-dialog-content>
  Would you like to archive this Student?
  <br><br>
  </md-dialog-content>
  <md-dialog-actions align="end">
    <button md-raised-button color="accent" (click)="dialogRef.close('Delete!')">Archive</button>
    <button md-button (click)="dialogRef.close('Cancel!')">Cancel</button>
  </md-dialog-actions>
  `
})
export class DeleteStudentComponent {
  constructor(public dialogRef: MdDialogRef<DeleteStudentComponent>) { }
}

export class StudentsDataSource extends DataSource<Student> {

  constructor(private student: Student[]) {
    super();
  }

  connect(): Observable<any[]> {
    return Observable.of(this.student);
  }

  disconnect() { }

}
