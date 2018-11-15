import React from 'react'
import Keypad from '../components/Keypad'
import KeypadDisplay from '../components/Keypad/KeypadDisplay'

class AmountPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstStep: 'first step here'
    }
  }

  render () {
    return (
      <div className="hero-body keypad is-paddingless is-fullheight">
        <div className="tile is-ancestor is-vertical is-inline-flex-fullhd is-fullheight">
          <Keypad className="keypad" displayValue={this.props.displayValue}></Keypad>
        </div>
      </div>
    )
  }
}

export default AmountPage