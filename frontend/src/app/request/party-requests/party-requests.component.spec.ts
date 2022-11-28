import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyRequestsComponent } from './party-requests.component';

describe('PartyRequestsComponent', () => {
  let component: PartyRequestsComponent;
  let fixture: ComponentFixture<PartyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
