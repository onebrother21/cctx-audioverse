import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthSignOutComponent } from './auth-signout.component';

describe('AuthSignOutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthSignOutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthSignOutComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'auth-signout'`, () => {
    const fixture = TestBed.createComponent(AuthSignOutComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('auth-signout');
  });
});
