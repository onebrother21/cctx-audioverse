import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthLoginComponent } from './qs-auth-login.component';

describe('AuthLoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthLoginComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthLoginComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-login'`, () => {
    const fixture = TestBed.createComponent(AuthLoginComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-login');
  });
});
