import React, { Component } from 'react'
import  Stepper  from './components/Stepper/Stepper'
import { AmountPage, CurrencySelectPage, PaymentDetailsPage, PaymentSummaryPage } from './Pages'
import fontawesome from '@fortawesome/fontawesome'

import { faMoneyBillWaveAlt, faSortNumericUp } from '@fortawesome/fontawesome-free-solid';
import 'bulma/bulma.sass'
import './scss/app.scss'

fontawesome.library.add(faMoneyBillWaveAlt, faSortNumericUp);

class App extends Component {
  constructor () {
    super()
    this.state = {
      amount: 0,
      currency: ''
    }
  }
  render () {
    let { amount } = this.state

    const steps =
      [
        {name: 'Amount', component: <AmountPage displayValue={amount}/>, icon: 'sort-numeric-up'},
        {name: 'Select Currency', component: <CurrencySelectPage/>, icon: 'bolt'},
        {name: 'Payment Details', component: <PaymentDetailsPage/>, icon: 'money-check-alt'},
        {name: 'Summary', component: <PaymentSummaryPage/>, icon: 'check'}
      ]

    return (
      <section>
        <Stepper
          steps={steps}
          showNavigation={true}
          showSteps={true}
          stepsNavigation={true}
          prevBtnOnLastStep={false}
          preventEnterSubmission={true}
          nextTextOnFinalActionStep={'Submit'}
          hocValidationAppliedTo={[3]}
          nextButtonCls={'button is-light absolute-bottom-right'}
          backButtonCls={'button is-light'}
        />


      </section>

    )
  }
}

export default App
