import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeachersComponent } from './edit-teachers.component';

describe('EditTeachersComponent', () => {
  let component: EditTeachersComponent;
  let fixture: ComponentFixture<EditTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTeachersComponent]
    });
    fixture = TestBed.createComponent(EditTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
