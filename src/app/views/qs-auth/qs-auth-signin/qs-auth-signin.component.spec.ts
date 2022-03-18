import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_AuthSignInComponent } from './qs-auth-signin.component';

describe('QS_AuthSignInComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_AuthSignInComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_AuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-signin'`, () => {
    const fixture = TestBed.createComponent(QS_AuthSignInComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-signin');
  });
});
