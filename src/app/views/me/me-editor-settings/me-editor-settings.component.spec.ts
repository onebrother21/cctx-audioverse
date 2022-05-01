import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeEditorSettingsComponent } from './me-editor-settings.component';

describe('MeEditorSettingsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeEditorSettingsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeEditorSettingsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-editor-settings'`, () => {
    const fixture = TestBed.createComponent(MeEditorSettingsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-editor-settings');
  });
});
