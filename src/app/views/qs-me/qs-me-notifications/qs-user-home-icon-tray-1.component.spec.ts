import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHomeIconTrayOneComponent } from './qs-user-home-icon-tray-1.component';

describe('UserHomeIconTrayOneComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserHomeIconTrayOneComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserHomeIconTrayOneComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-icon-tray-1'`, () => {
    const fixture = TestBed.createComponent(UserHomeIconTrayOneComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-icon-tray-1');
  });
});
