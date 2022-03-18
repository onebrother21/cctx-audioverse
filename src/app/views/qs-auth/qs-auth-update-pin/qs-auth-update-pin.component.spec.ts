import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_AuthUpdatePinComponent } from './qs-auth-update-pin.component';

describe('QS_AuthUpdatePinComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_AuthUpdatePinComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_AuthUpdatePinComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-update-pin'`, () => {
    const fixture = TestBed.createComponent(QS_AuthUpdatePinComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-update-pin');
  });
});
