import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_FooterComponent } from './qs-footer.component';

describe('QS_FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_FooterComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-10'`, () => {
    const fixture = TestBed.createComponent(QS_FooterComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-10');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(QS_FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qs-10 app is running!');
  });
});
