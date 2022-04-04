import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeEdtiorComponent } from './me-editor.component';

describe('MeEdtiorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeEdtiorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeEdtiorComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-editor'`, () => {
    const fixture = TestBed.createComponent(MeEdtiorComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-editor');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MeEdtiorComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('me-account app is running!');
  });
});
