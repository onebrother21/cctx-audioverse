import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomListComponent } from './qs-room-list.component';

describe('RoomListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RoomListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RoomListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-room-list'`, () => {
    const fixture = TestBed.createComponent(RoomListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-room-list');
  });
});
