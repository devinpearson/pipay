import React from 'react';
import Keypad from '../components/Keypad'

class AmountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstStep: "first step here"
        };
    }

    render() {
        return (
          <div className="hero-body" style={{maxHeight: '55vh'}}>
              <Keypad displayValue={this.props.displayValue}></Keypad>
          </div>
        );
    }
}

export default AmountPage;