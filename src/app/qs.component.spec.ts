import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_Component } from './qs.component';

describe('QS_Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_Component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_Component);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs'`, () => {
    const fixture = TestBed.createComponent(QS_Component);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(QS_Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('qs app is running!');
  });
});
