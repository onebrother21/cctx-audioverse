import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_AuthComponent } from './qs-auth.component';

describe('QS_AuthComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_AuthComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_AuthComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-auth'`, () => {
    const fixture = TestBed.createComponent(QS_AuthComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-auth');
  });
});
