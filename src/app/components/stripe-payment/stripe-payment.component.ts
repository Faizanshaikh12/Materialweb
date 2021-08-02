import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent implements OnInit {
  strikeCheckout: any = null;

  constructor() {
  }

  ngOnInit() {
    this.stripePaymentGateway();
  }

  checkout(amount) {
    const strikeCheckout = (<any> window).StripeCheckout.configure({
      key: 'pk_test_51JIYGzSCiUqxo4A1B0lEJyJteprFTxWolIxhvplNpLxZDMrpPhk05gANngBAso7n1shNwrnUiAWAUxYRXanTBsaw00bMeCLYox',
      locale: 'auto',
      token: function(stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      }
    });

    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement('script');
      scr.id = 'stripe-script';
      scr.type = 'text/javascript';
      scr.src = 'https://checkout.stripe.com/checkout.js';

      scr.onload = () => {
        this.strikeCheckout = (<any> window).StripeCheckout.configure({
          key: 'pk_test_51JIYGzSCiUqxo4A1B0lEJyJteprFTxWolIxhvplNpLxZDMrpPhk05gANngBAso7n1shNwrnUiAWAUxYRXanTBsaw00bMeCLYox',
          locale: 'auto',
          token: function(token: any) {
            console.log(token);
            alert('Payment via stripe successfull!');
          }
        });
      };

      window.document.body.appendChild(scr);
    }
  }

}
