import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDashComponent } from './qs-user-dash.component';

describe('UserDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-dash'`, () => {
    const fixture = TestBed.createComponent(UserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-dash');
  });
});
