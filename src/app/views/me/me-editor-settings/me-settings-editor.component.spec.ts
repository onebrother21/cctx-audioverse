import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeSettingsEditorComponent } from './me-settings-editor.component';

describe('MeSettingsEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeSettingsEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeSettingsEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-settings-editor'`, () => {
    const fixture = TestBed.createComponent(MeSettingsEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-settings-editor');
  });
});
