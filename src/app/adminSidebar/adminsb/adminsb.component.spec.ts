import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsbComponent } from './adminsb.component';

describe('AdminsbComponent', () => {
  let component: AdminsbComponent;
  let fixture: ComponentFixture<AdminsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
