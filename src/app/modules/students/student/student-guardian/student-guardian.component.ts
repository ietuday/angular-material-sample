import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentsConfig } from '../students.config';
import { ApiService } from '../../../../core/services/api.service';
import { MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'erp-student-guardian',
  templateUrl: './student-guardian.component.html',
  styleUrls: ['./student-guardian.component.scss']
})
export class StudentGuardianComponent implements OnInit {
  Guardian1Form: FormGroup;
  Guardian2Form: FormGroup;

  @Input() studentId: any;
  @Output() changeTab = new EventEmitter();


  cities = StudentsConfig.cities;
  states = StudentsConfig.states;
  edited: boolean;
  isSameAddress = false;
  isSameAddress2 = false;
  // body;
  flag = 0;

  constructor(private fb: FormBuilder,
    private api: ApiService,
    private snackbar: MdSnackBar) {
    this.Guardian1Form = fb.group({
      'relationship': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'email': [''],
      'officePhoneNumber': [''],
      'sameAsStudentAddress': [false],
      'primaryAddress': [''],
      'secondaryAddress': [''],
      'city': [''],
      'state': [''],
      'postalCode': [''],
      'note': ['']
    });

    this.Guardian2Form = fb.group({
      'relationship': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'phoneNumber': [null, Validators.required],
      'email': [''],
      'officePhoneNumber': [''],
      'sameAsStudentAddress': [false],
      'primaryAddress': [''],
      'secondaryAddress': [''],
      'city': [''],
      'state': [''],
      'postalCode': [''],
      'note': ['']
    });
  }

  ngOnInit() {

  }




  onNextTab() {
    const body = [];
    body.push(this.Guardian1Form.value);
    body.push(this.Guardian2Form.value);

    const apiParam = {
      'data': body,
      'pathParams': {
        'STUDENT_ID': this.studentId
      }
    };


    const apiUrl = this.studentId ? 'UPDATE_STUDENT_GUARDIAN' : 'UPDATE_STUDENT_GUARDIAN';
    // const apiParam = { 'data': this.Guardian1Form.value };

    this.api
      .request(apiUrl, apiParam)
      .subscribe(response => {

        this.snackbar.open('Guardian Information Added successfully...!', '', {
          duration: 1000
        });

        this.changeTab.emit(2);
      });

  }

  onSameAddressClick() {
    this.isSameAddress = !this.isSameAddress;
  }

  onSameAddressClick2() {
    this.isSameAddress2 = !this.isSameAddress2;
  }
}
