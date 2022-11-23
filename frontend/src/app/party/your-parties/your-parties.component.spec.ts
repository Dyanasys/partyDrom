import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPartiesComponent } from './your-parties.component';

describe('YourPartiesComponent', () => {
  let component: YourPartiesComponent;
  let fixture: ComponentFixture<YourPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPartiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
