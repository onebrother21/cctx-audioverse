import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_AuthRegisterComponent } from './qs-auth-register.component';

describe('QS_AuthRegisterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_AuthRegisterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_AuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-register'`, () => {
    const fixture = TestBed.createComponent(QS_AuthRegisterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-register');
  });
});
