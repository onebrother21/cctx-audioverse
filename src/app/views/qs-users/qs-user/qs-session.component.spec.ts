import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_SessionComponent } from './qs-session.component';

describe('QS_SessionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_SessionComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_SessionComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session'`, () => {
    const fixture = TestBed.createComponent(QS_SessionComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session');
  });
});
