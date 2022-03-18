import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PreviewListComponent } from './preview-list.component';

describe('PreviewListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PreviewListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PreviewListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'preview-list'`, () => {
    const fixture = TestBed.createComponent(PreviewListComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('preview-list');
  });
});
