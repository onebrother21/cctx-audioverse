import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthRegisterExtComponent } from './auth-register-ext.component';

describe('AuthRegisterExtComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthRegisterExtComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthRegisterExtComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'auth-register-ext'`, () => {
    const fixture = TestBed.createComponent(AuthRegisterExtComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('auth-register-ext');
  });
});
