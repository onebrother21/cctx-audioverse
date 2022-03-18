import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PreviewRoomComponent } from './preview-room.component';

describe('PreviewRoomComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PreviewRoomComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PreviewRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'preview-room'`, () => {
    const fixture = TestBed.createComponent(PreviewRoomComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('preview-room');
  });
});
