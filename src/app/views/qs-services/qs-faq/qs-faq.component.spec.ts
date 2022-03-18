import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QS_FAQComponent } from './qs-faq.component';

describe('QS_FAQComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QS_FAQComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QS_FAQComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'qs-faq'`, () => {
    const fixture = TestBed.createComponent(QS_FAQComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('qs-faq');
  });
});
