import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionListComponent } from './qs-message-listcomponent';

describe('SessionListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SessionListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SessionListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session-list'`, () => {
    const fixture = TestBed.createComponent(SessionListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session-list');
  });
});
