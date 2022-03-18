import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeNotifications2Component } from './me-notifications-2.component';

describe('MeNotifications2Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeNotifications2Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeNotifications2Component);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-notifications-2'`, () => {
    const fixture = TestBed.createComponent(MeNotifications2Component);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-notifications-2');
  });
});
