import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UploadsComponent } from './qs-uploads.component';

describe('QS_UploadsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UploadsComponent
      ],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UploadsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
  it(`should have as title 'cctx-apps'`, () => {
    const fixture = TestBed.createComponent(QS_UploadsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('cctx-apps');
  });
});
