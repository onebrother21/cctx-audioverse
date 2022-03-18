import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserHomePreviewsComponent } from './qs-user-home-previews.component';

describe('QS_UserHomePreviewsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserHomePreviewsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserHomePreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-previews'`, () => {
    const fixture = TestBed.createComponent(QS_UserHomePreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-previews');
  });
});
