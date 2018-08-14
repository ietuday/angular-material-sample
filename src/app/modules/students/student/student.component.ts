import { Component, OnInit, OnDestroy, EventEmitter, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { StudentDocumentsComponent } from './student-documents/student-documents.component';



@Component({
  selector: 'erp-add-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, OnDestroy {

  selectedTabIndex = 0;
  studentId = '';

  ngOnInit() {
  }

  nextTab() {
    this.selectedTabIndex++;
  }

  onChangeTab(id) {
    this.selectedTabIndex = id;
  }

  getStudentId(studentid) {
    this.studentId = studentid;
    console.log(this.studentId);
  }


  ngOnDestroy() {
    // chec if for is completed and submitted
   // confirm('You will you filled information, Would you like to continue');
  }
}
