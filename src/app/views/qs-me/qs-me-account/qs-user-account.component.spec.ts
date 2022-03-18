import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_UserAccountComponent } from './qs-user-account.component';

describe('QS_UserAccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_UserAccountComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_UserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-user-account'`, () => {
    const fixture = TestBed.createComponent(QS_UserAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-user-account');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(QS_UserAccountComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qs-user-account app is running!');
  });
});
