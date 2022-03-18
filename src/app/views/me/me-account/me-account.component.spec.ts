import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserAccountComponent } from './me-account.component';

describe('UserAccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserAccountComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(UserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-account'`, () => {
    const fixture = TestBed.createComponent(UserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-account');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UserAccountComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('me-account app is running!');
  });
});
