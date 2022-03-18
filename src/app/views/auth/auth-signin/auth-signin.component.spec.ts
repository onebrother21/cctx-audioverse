import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthSignInComponent } from './auth-signin.component';

describe('AuthSignInComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthSignInComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'auth-signin'`, () => {
    const fixture = TestBed.createComponent(AuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('auth-signin');
  });
});
