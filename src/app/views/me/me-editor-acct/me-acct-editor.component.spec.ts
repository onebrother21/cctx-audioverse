import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeAccountEditorComponent } from './me-acct-editor.component';

describe('MeAccountEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeAccountEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeAccountEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-acct-editor'`, () => {
    const fixture = TestBed.createComponent(MeAccountEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-acct-editor');
  });
});
