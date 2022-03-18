import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomPreviewsComponent } from './qs-room-previews.component';

describe('RoomPreviewsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RoomPreviewsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RoomPreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-room-previews'`, () => {
    const fixture = TestBed.createComponent(RoomPreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-room-previews');
  });
});
