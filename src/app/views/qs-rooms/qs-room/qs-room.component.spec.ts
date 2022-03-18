import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionRoomComponent } from './qs-room.component';

describe('SessionRoomComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SessionRoomComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SessionRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-room'`, () => {
    const fixture = TestBed.createComponent(SessionRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-room');
  });
});
