import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_AuthForgotComponent } from './qs-auth-forgot.component';

describe('QS_AuthForgotComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_AuthForgotComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_AuthForgotComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-forgot'`, () => {
    const fixture = TestBed.createComponent(QS_AuthForgotComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-forgot');
  });
});
