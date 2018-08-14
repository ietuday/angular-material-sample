import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQualificationComponent } from './student-qualification.component';

describe('StudentQualificationComponent', () => {
  let component: StudentQualificationComponent;
  let fixture: ComponentFixture<StudentQualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
