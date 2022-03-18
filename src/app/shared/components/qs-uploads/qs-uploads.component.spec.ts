import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UploadsComponent } from './qs-uploads.component';

describe('UploadsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UploadsComponent
      ],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(UploadsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
  it(`should have as title 'cctx-apps'`, () => {
    const fixture = TestBed.createComponent(UploadsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-apps');
  });
});
