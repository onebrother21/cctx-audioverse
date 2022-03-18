import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_SessionRoomComponent } from './qs-session-room.component';

describe('QS_SessionRoomComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_SessionRoomComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_SessionRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session-room'`, () => {
    const fixture = TestBed.createComponent(QS_SessionRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session-room');
  });
});
