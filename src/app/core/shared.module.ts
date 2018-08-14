import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdToolbarModule,
  MdSidenavModule,
  MdMenuModule,
  MdIconModule,
  MdRippleModule,
  MdTableModule,
  MdPaginatorModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdNativeDateModule,
  MdDatepickerModule,
  MdTabsModule,
  MdSelectModule,
  MdListModule,
  MdRadioModule,
  MdTooltipModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule,
    MdRippleModule,
    MdTableModule,
    MdPaginatorModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdTabsModule,
    MdSelectModule,
    MdSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdListModule,
    MdRadioModule,
    MdTooltipModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule,
    MdRippleModule,
    MdTableModule,
    MdPaginatorModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdTabsModule,
    MdSelectModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdListModule,
    MdRadioModule,
    MdTooltipModule
  ],
})
export class SharedModule { }
