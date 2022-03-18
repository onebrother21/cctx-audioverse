import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomPreviewComponent } from './qs-room-preview.component';

describe('RoomPreviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RoomPreviewComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RoomPreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-room-preview'`, () => {
    const fixture = TestBed.createComponent(RoomPreviewComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-room-preview');
  });
});
