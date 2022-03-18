import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_RoomPreviewsComponent } from './qs-room-previews.component';

describe('QS_RoomPreviewsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_RoomPreviewsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_RoomPreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-room-previews'`, () => {
    const fixture = TestBed.createComponent(QS_RoomPreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-room-previews');
  });
});
