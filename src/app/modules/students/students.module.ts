import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../core/core.module';
import { StudentsRoutingModule, routedComponents, entryComponents } from './students-routing.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';


@NgModule({

  imports: [
    CommonModule,
    CoreModule,
    StudentsRoutingModule,
    DropzoneModule.forRoot()
  ],

  declarations: [routedComponents],
  entryComponents: [entryComponents]
})

export class StudentsModule { }
