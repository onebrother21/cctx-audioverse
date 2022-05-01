import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertWActionsComponent } from './alert-w-actions.component';

describe('AlertWActionsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AlertWActionsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AlertWActionsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'alert'`, () => {
    const fixture = TestBed.createComponent(AlertWActionsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('alert');
  });
});
