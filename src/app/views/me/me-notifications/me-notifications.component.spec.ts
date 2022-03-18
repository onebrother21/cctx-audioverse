import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeNotificationsComponent } from './me-notifications.component';

describe('MeNotificationsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeNotificationsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeNotificationsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-notifications'`, () => {
    const fixture = TestBed.createComponent(MeNotificationsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-notifications');
  });
});
