import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AlertComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'alert'`, () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('alert');
  });
});
