import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserAccountEditorComponent } from './qs-user-acct-editor.component';

describe('UserAccountEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserAccountEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserAccountEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-acct-editor'`, () => {
    const fixture = TestBed.createComponent(UserAccountEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-acct-editor');
  });
});
