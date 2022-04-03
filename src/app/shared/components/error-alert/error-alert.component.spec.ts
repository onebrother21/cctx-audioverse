import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorAlertComponent } from './error-alert.component';

describe('ErrorAlertComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ErrorAlertComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ErrorAlertComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'error-alert'`, () => {
    const fixture = TestBed.createComponent(ErrorAlertComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('error-alert');
  });
});
