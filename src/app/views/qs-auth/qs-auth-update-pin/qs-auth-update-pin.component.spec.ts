import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthUpdatePinComponent } from './qs-auth-update-pin.component';

describe('AuthUpdatePinComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthUpdatePinComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthUpdatePinComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth-update-pin'`, () => {
    const fixture = TestBed.createComponent(AuthUpdatePinComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth-update-pin');
  });
});
