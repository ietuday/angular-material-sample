import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../core/core.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { LecturesComponent } from './lectures/lectures.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CoursesRoutingModule
  ],
  declarations: [LecturesComponent]
})
export class CoursesModule { }
