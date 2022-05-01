import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentsCheckoutComponent } from './payments-checkout.component';

describe('PaymentsCheckoutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PaymentsCheckoutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaymentsCheckoutComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });

  it(`should have as title 'payments-checkout'`, () => {
    const fixture = TestBed.createComponent(PaymentsCheckoutComponent);
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('payments-checkout');
  });
});
