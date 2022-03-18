import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MeAccountComponent } from './me-acct.component';

describe('MeAccountComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MeAccountComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MeAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'me-acct'`, () => {
    const fixture = TestBed.createComponent(MeAccountComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('me-acct');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MeAccountComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('me-account app is running!');
  });
});
