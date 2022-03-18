import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_RoomPreviewComponent } from './qs-room-preview.component';

describe('QS_RoomPreviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_RoomPreviewComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_RoomPreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-room-preview'`, () => {
    const fixture = TestBed.createComponent(QS_RoomPreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-room-preview');
  });
});
