import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserDashComponent } from './qs-user-dash.component';

describe('QS_UserDashComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserDashComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-dash'`, () => {
    const fixture = TestBed.createComponent(QS_UserDashComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-dash');
  });
});
