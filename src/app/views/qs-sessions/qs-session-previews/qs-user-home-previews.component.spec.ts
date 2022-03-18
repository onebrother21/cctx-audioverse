import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserHomePreviewsComponent } from './qs-user-home-previews.component';

describe('UserHomePreviewsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserHomePreviewsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserHomePreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-home-previews'`, () => {
    const fixture = TestBed.createComponent(UserHomePreviewsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-home-previews');
  });
});
