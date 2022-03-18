import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserHomeIconTrayOneComponent } from './qs-user-home-icon-tray-1.component';

describe('QS_UserHomeIconTrayOneComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserHomeIconTrayOneComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserHomeIconTrayOneComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-icon-tray-1'`, () => {
    const fixture = TestBed.createComponent(QS_UserHomeIconTrayOneComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-icon-tray-1');
  });
});
