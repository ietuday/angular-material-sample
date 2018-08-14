import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentsConfig } from '../students.config';
import { ApiService } from '../../../../core/services/api.service';
import { MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'erp-student-qualification',
  templateUrl: './student-qualification.component.html',
  styleUrls: ['./student-qualification.component.scss']
})
export class StudentQualificationComponent implements OnInit {
  @Output() changeTab = new EventEmitter();

  selectedTabIndex = 0;
  percentage: number;

  @Input() studentId: any;

  rFormQualification: FormGroup;
  qualification = [];
  categories = StudentsConfig.categories;
  religions = StudentsConfig.religions;
  bloodGroups = StudentsConfig.bloodGroups;
  cities = StudentsConfig.cities;
  states = StudentsConfig.states;
  courses = StudentsConfig.courses;
  universities = StudentsConfig.universities;
  years = StudentsConfig.years;
  casts = StudentsConfig.casts;

  constructor(private fb: FormBuilder,
    private api: ApiService,
    private snackbar: MdSnackBar) {
    this.rFormQualification = fb.group({
      'course': [null, Validators.required],
      'boardName': [null, Validators.required],
      'yearOfPassing': [null, Validators.required],
      'marksObtained': [null, Validators.required],
      'totalMarks': [null, Validators.required],
      'percentage': [{ value: '', disabled: true }, Validators.nullValidator],
      'duration': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  // ngOnChanges() {
  // }

  // to add qualification into grid
  addQualification() {
    const qual = {
      'course': this.rFormQualification.value.course,
      'boardName': this.rFormQualification.value.boardName,
      'yearOfPassing': this.rFormQualification.value.yearOfPassing,
      'marksObtained': this.rFormQualification.value.marksObtained,
      'totalMarks': this.rFormQualification.value.totalMarks,
      'percentage': this.percentage,
      'duration': this.rFormQualification.value.duration
    }
    this.qualification.push(qual);
    console.log(this.qualification.length);
    this.clearFields();
  }

  // clear form fields
  clearFields() {
    this.rFormQualification.reset();
  }


  // calculating student percentage
  getPercentage() {
    if (this.rFormQualification.value.marksObtained !== '' && this.rFormQualification.value.totalMarks !== '') {
      if (this.rFormQualification.value.marksObtained > this.rFormQualification.value.totalMarks) {
        alert('MarksObtained should be less than OutOfMarks');
        this.rFormQualification.controls['marksObtained'].reset();
        this.rFormQualification.controls['totalMarks'].reset();

      } else {
        const per = (this.rFormQualification.value.marksObtained / this.rFormQualification.value.totalMarks) * 100;
        this.rFormQualification.controls['percentage'].patchValue(per.toFixed(2) + '%');

        // if (per !== 0) { this.percentage = Math.round(this.percentage); this.percentage = per; };
      }
    }

  }

  removeItem(qual) {
    this.qualification = this.qualification.filter(item => item.course !== qual.course);
  }

  onNextTab() {
    const apiUrl = this.studentId ? 'UPDATE_STUDENT_QUALIFICATION' : 'UPDATE_STUDENT_QUALIFICATION';

    const apiParam = {
      'data': this.qualification,
      'pathParams': {
        'STUDENT_ID': this.studentId
      }
    };
    this.api.request(apiUrl, apiParam)
      .subscribe(response => {
        if (response) {
          this.snackbar.open('Qualification Details Saved Successfully...!', '', {
            duration: 1000
          });
        }
        this.changeTab.emit(3);
      });
  }
}
