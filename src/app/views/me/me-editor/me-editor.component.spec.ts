import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeEditorComponent } from './me-editor.component';

describe('MeEditorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeEditorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-editor'`, () => {
    const fixture = TestBed.createComponent(MeEditorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-editor');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MeEditorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('me-account app is running!');
  });
});
