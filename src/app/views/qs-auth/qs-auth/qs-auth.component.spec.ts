import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AuthComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'auth'`, () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('auth');
  });
});
