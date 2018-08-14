import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPersonalComponent } from './student-personal.component';

describe('StudentPersonalComponent', () => {
  let component: StudentPersonalComponent;
  let fixture: ComponentFixture<StudentPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
