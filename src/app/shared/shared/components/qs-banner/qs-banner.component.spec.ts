import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_BannerComponent } from './qs-banner.component';

describe('QS_BannerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_BannerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_BannerComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-banner'`, () => {
    const fixture = TestBed.createComponent(QS_BannerComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-banner');
  });
});
