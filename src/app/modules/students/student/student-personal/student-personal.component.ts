import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentsConfig } from '../students.config';
import { ApiService } from '../../../../core/services/api.service';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'erp-student-personal',
  templateUrl: './student-personal.component.html',
  styleUrls: ['./student-personal.component.scss']
})
export class StudentPersonalComponent implements OnInit {
  studentForm: FormGroup;
  studentNum: string;
  flag = 0;
  studentId: string;

  @Output() getStudentId = new EventEmitter();
  @Output() changeTab = new EventEmitter();

  // @Input() studentId: any;

  categories = StudentsConfig.categories;
  religions = StudentsConfig.religions;
  bloodGroups = StudentsConfig.bloodGroups;
  cities = StudentsConfig.cities;
  states = StudentsConfig.states;
  casts = StudentsConfig.casts;

  constructor(private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
    private snackbar: MdSnackBar) {
    this.studentForm = fb.group({
      'firstName': [null, Validators.required],
      'fathersName': [null, Validators.required],
      'gender': [null, Validators.required],
      'dateOfBirth': [null, Validators.required],
      'emailId': [null, Validators.email],
      'adharCardNo': [null, Validators.required],
      'minority': [null],
      'category': [null, Validators.required],
      'lastName': [null, Validators.required],
      'mothersName': [null],
      'physicallyHandicapped': [null],
      'birthPlace': [null, Validators.required],
      'phone': [null, Validators.required],
      'scholarshipAvailable': [null],
      'minorityType': [null],
      'religion': [null, Validators.required],
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'primaryAddress': [null, Validators.required],
      'secondaryAddress': [null],
      'postalCode': [null],
      'admissionDate': [null, Validators.required],
      'domicile': [null, Validators.required],
      'nationality': [null, Validators.required],
      'caste': [null],
      'bloodGroup': [null]

    });
  }

  ngOnInit() {
  }

  onNextTab() {
    const apiUrl = this.studentId ? 'CREATE_STUDENT' : 'UPDATE_STUDENT';
    const apiParam = { 'data': this.studentForm.value };

    this.api
      .request(apiUrl, apiParam)
      .subscribe(response => {

        this.snackbar.open('Student saved successfully...!', '', {
          duration: 1000
        });

        this.studentId = response['id'];
        this.getStudentId.emit(response['id']);
        this.changeTab.emit(1);
      });
  }

  onCancel() {
    this.router.navigate(['students']);
  }

}
