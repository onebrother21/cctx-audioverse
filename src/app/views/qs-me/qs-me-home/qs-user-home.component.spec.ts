import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserHomeComponent } from './qs-user-home.component';

describe('QS_UserHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserHomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home'`, () => {
    const fixture = TestBed.createComponent(QS_UserHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home');
  });
});
