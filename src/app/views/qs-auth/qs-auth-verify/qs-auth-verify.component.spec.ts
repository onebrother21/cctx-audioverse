import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_AuthVerifyComponent } from './qs-auth-verify.component';

describe('QS_AuthVerifyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_AuthVerifyComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_AuthVerifyComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-verify'`, () => {
    const fixture = TestBed.createComponent(QS_AuthVerifyComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-verify');
  });
});
