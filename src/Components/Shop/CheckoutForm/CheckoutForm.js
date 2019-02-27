import React, {Component} from 'react'
import {CardElement, injectStripe, Elements, StripeProvider} from 'react-stripe-elements'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        complete: false
    }
    this.submit = this.submit.bind(this)
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"})
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    })
  
    if (response.ok) console.log("Purchase Complete!")
  }

  render() {

    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
        <StripeProvider apiKey="pk_test_FufTuEYTSPj8ORgVRfP930bA">
            <div className="checkout">
                <h1>PAYMENT</h1>
                <p>Would you like to complete the purchase?</p>
                <Elements>
                    <CardElement />
                </Elements>
                <button onClick={this.submit}>Submit Payment</button>
            </div>
        </StripeProvider>
    )

  }
}

export default injectStripe(CheckoutForm)