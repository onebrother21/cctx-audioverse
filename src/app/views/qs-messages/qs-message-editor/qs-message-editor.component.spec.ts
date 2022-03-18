import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionEditorComponent } from './qs-message-editor.component';

describe('SessionEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SessionEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-session-editor'`, () => {
    const fixture = TestBed.createComponent(SessionEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-session-editor');
  });
});
