import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentsComponent } from './payments.component';

describe('PaymentsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PaymentsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaymentsComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'payments'`, () => {
    const fixture = TestBed.createComponent(PaymentsComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('payments');
  });
});
