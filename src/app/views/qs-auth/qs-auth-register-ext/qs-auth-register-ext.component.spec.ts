import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_AuthRegisterExtComponent } from './qs-auth-register-ext.component';

describe('QS_AuthRegisterExtComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_AuthRegisterExtComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_AuthRegisterExtComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-register-ext'`, () => {
    const fixture = TestBed.createComponent(QS_AuthRegisterExtComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-register-ext');
  });
});
