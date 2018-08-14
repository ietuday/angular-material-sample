import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from './../../../core/services/api.service';
import { Student } from '../../../core/models/student.model';
import { ActivatedRoute } from '@angular/router';
import { EndpointService } from '../../../core/config/api.config';

@Component({
  selector: 'erp-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student: Student = new Student();
  studentId: any;
  allDocuments = [];
  viewDocumentUrl;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private endpointService: EndpointService) {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
    });
  }

  ngOnInit() {
    this.loadStudents();
    this.loadAllDocuments();
  }

  loadStudents() {

    const apiParams = {
      'pathParams': {
        'STUDENTID': this.studentId
      }
    };

    this.api
      .request('GET_STUDENT', apiParams)
      .subscribe(student => this.student = student);
  }

  /**
   * Load all uploaded documents
   */
  loadAllDocuments(): void {

    const apiParams = {
      'pathParams': {
        'STUDENT_ID': this.studentId
      }
    };

    this.api
      .request('LOAD_ALL_DOCUMENTS', apiParams)
      .subscribe(response => {
        this.allDocuments = response;
      })
  }

  /**
 * View document
 */
  viewDocument(document): void {
    this.viewDocumentUrl = this.endpointService.get('VIEW_DOCUMENT').url.replace('RESOURCE_ID', document.resourceId)
  }
}
