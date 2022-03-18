import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeHomeComponent } from './me-home.component';

describe('MeHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeHomeComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-home'`, () => {
    const fixture = TestBed.createComponent(MeHomeComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-home');
  });
});
