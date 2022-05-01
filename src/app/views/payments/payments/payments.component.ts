import { Component } from '@angular/core';

@Component({
  selector: 'qs-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent {
  title = "payments";
  loadStripe(){
    if(!window.document.getElementById('stripe-custom-form-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-custom-form-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => (window as any)['Stripe'].setPublishableKey('pk_test_aeUUjYYcx4XNfKVW60pmHTtI');
      window.document.body.appendChild(s);
    }
  }
  ngOnInit(){this.loadStripe();}
}