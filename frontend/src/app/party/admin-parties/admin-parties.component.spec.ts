import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartiesComponent } from './admin-parties.component';

describe('AdminPartiesComponent', () => {
  let component: AdminPartiesComponent;
  let fixture: ComponentFixture<AdminPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
