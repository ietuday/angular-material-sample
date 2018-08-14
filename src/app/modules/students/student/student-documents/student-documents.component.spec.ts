import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDocumentsComponent } from './student-documents.component';

describe('StundentDocumentsComponent', () => {
  let component: StudentDocumentsComponent;
  let fixture: ComponentFixture<StudentDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
