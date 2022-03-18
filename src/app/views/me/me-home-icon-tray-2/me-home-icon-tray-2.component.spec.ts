import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHomeIconTrayTwoComponent } from './me-home-icon-tray-2.component';

describe('UserHomeIconTrayTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserHomeIconTrayTwoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserHomeIconTrayTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-home-icon-tray-2'`, () => {
    const fixture = TestBed.createComponent(UserHomeIconTrayTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-home-icon-tray-2');
  });
});
