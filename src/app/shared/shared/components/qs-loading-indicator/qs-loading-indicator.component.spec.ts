import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_LoadingIndicatorComponent } from './qs-loading-indicator.component';

describe('QS_LoadingIndicatorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_LoadingIndicatorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_LoadingIndicatorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-loading-indicator'`, () => {
    const fixture = TestBed.createComponent(QS_LoadingIndicatorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-loading-indicator');
  });
});
