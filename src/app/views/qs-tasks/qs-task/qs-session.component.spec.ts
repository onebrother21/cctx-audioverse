import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionComponent } from './qs-session.component';

describe('SessionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SessionComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SessionComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session'`, () => {
    const fixture = TestBed.createComponent(SessionComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session');
  });
});
