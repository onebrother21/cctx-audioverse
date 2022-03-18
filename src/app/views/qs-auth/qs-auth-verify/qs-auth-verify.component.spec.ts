import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthVerifyComponent } from './qs-auth-verify.component';

describe('AuthVerifyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthVerifyComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthVerifyComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-verify'`, () => {
    const fixture = TestBed.createComponent(AuthVerifyComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-verify');
  });
});
