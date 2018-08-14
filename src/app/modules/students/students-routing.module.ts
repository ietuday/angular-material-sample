import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './../../core/components/layout/layout.component';
import { StudentDocumentsComponent, DeleteDocumentComponent } from './student/student-documents/student-documents.component';


import { StudentPersonalComponent } from './student/student-personal/student-personal.component';
import { StudentGuardianComponent } from './student/student-guardian/student-guardian.component';
import { StudentQualificationComponent } from './student/student-qualification/student-qualification.component';


import { StudentListComponent, DeleteStudentComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ImageUploadComponent,ImageUploadDialog } from '../../core/components/image-upload/image-upload.component';
import {ImageCropperComponent} from 'ng2-img-cropper';

const routes: Routes = [
  {
    path: 'students',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: StudentListComponent,
        data: {
          breadcrumb: {
            title: 'Students',
            links: [
              { title: 'Home', routeLink: '/' },
              { title: 'Students', routeLink: '/students' }
            ]
          }
        }
      },
      {
        path: 'register',
        component: StudentComponent,
        data: {
          breadcrumb: {
            title: 'Register Student',
            links: [
              { title: 'Home', routeLink: '/' },
              { title: 'Students', routeLink: '/students' },
              { title: 'Register Student', routeLink: '/students/register' }
            ]
          }
        }
      },
      {
        path: ':id/details',
        component: StudentDetailComponent,
        data: {
          breadcrumb: {
            title: 'Student Details',
            links: [
              { title: 'Home', routeLink: '/' },
              { title: 'Students', routeLink: '/students' },
              { title: 'Student Detail', routeLink: '' }
            ]
          }
        }
      },
      {
        path: 'register/:id',
        component: StudentComponent,
        data: {
          breadcrumb: {
            title: 'Register Student',
            links: [
              { title: 'Home', routeLink: '/' },
              { title: 'Students', routeLink: '/student' }
            ]
          }
        }
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentsRoutingModule { }

export const routedComponents = [
  StudentDocumentsComponent,
  DeleteDocumentComponent,
  StudentListComponent,
  StudentComponent,
  StudentPersonalComponent,
  StudentGuardianComponent,
  StudentQualificationComponent,
  StudentDetailComponent,
  DeleteStudentComponent,
  ImageUploadComponent,
  ImageCropperComponent,
  ImageUploadDialog
];
export const entryComponents = [DeleteDocumentComponent,DeleteStudentComponent,ImageUploadDialog];



