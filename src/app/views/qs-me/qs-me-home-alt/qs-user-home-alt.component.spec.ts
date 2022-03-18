import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHomeAltComponent } from './qs-user-home-alt.component';

describe('UserHomeAltComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserHomeAltComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserHomeAltComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-alt'`, () => {
    const fixture = TestBed.createComponent(UserHomeAltComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-alt');
  });
});
