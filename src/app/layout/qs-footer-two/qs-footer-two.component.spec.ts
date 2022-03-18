import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterTwoComponent } from './qs-footer-two.component';

describe('FooterTwoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FooterTwoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-11'`, () => {
    const fixture = TestBed.createComponent(FooterTwoComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-11');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FooterTwoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qs-11 app is running!');
  });
});
