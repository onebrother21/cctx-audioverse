import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeEditorAccountComponent } from './me-editor-acct.component';

describe('MeEditorAccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeEditorAccountComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeEditorAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-editor-acct'`, () => {
    const fixture = TestBed.createComponent(MeEditorAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-editor-acct');
  });
});
