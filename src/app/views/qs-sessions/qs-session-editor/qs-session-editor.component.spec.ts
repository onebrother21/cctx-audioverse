import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_SessionEditorComponent } from './qs-session-editor.component';

describe('QS_SessionEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_SessionEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_SessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session-editor'`, () => {
    const fixture = TestBed.createComponent(QS_SessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session-editor');
  });
});
