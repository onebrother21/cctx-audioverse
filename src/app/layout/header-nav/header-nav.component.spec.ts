import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderNavMenuComponent } from './header-nav.component';

describe('HeaderNavMenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderNavMenuComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeaderNavMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'header-nav'`, () => {
    const fixture = TestBed.createComponent(HeaderNavMenuComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('header-nav');
  });
});
