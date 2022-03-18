import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_RoomEditorComponent } from './qs-room-editor.component';

describe('QS_RoomEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_RoomEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_RoomEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-room-editor'`, () => {
    const fixture = TestBed.createComponent(QS_RoomEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-room-editor');
  });
});
