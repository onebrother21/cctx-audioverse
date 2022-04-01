import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BannerComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BannerComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'banner'`, () => {
    const fixture = TestBed.createComponent(BannerComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('banner');
  });
});
