import React from 'react'
import KeypadDisplay from './KeypadDisplay'
import KeypadButton from './KeypadButton'

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

export default class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
  }

  clearAll () {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false
    })
  }

  clearDisplay () {
    this.setState({
      displayValue: '0'
    })
  }

  clearLastChar () {
    const {displayValue} = this.state

    this.setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
    })
  }

  toggleSign () {
    const {displayValue} = this.state
    const newValue = parseFloat(displayValue) * -1

    this.setState({
      displayValue: String(newValue)
    })
  }

  inputPercent () {
    const {displayValue} = this.state
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0)
      return

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100

    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2))
    })
  }

  inputDot () {
    const {displayValue} = this.state

    if (!(/\./).test(displayValue)) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }

  inputDigit (digit) {
    const {displayValue, waitingForOperand} = this.state

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }

  performOperation (nextOperator) {
    const {value, displayValue, operator} = this.state
    const inputValue = parseFloat(displayValue)

    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator](currentValue, inputValue)

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  }

  handleKeyDown = (event) => {
    let {key} = event

    if (key === 'Enter')
      key = '='

    if ((/\d/).test(key)) {
      event.preventDefault()
      this.inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
      event.preventDefault()
      this.performOperation(key)
    } else if (key === '.') {
      event.preventDefault()
      this.inputDot()
    } else if (key === '%') {
      event.preventDefault()
      this.inputPercent()
    } else if (key === 'Backspace') {
      event.preventDefault()
      this.clearLastChar()
    } else if (key === 'Clear') {
      event.preventDefault()

      if (this.state.displayValue !== '0') {
        this.clearDisplay()
      } else {
        this.clearAll()
      }
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  render () {
    const {displayValue} = this.state

    const clearDisplay = displayValue !== '0'
    const clearText = clearDisplay ? 'C' : 'AC'

    return (

      <div className="tile is-parent is-vertical">
        <div className="tile is-vertical">
          < KeypadDisplay value={displayValue}/>
        </div>
        <div className="tile is-vertical" style={{padding: 10}}>
          <div className="columns is-mobile is-marginless">
            <div className="column is-4" style={{padding: 5}}>
                <KeypadButton className="key-1" onPress={() => this.inputDigit(1)}>1</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
                <KeypadButton className="key-2" onPress={() => this.inputDigit(2)}>2</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
                <KeypadButton className="key-3" onPress={() => this.inputDigit(3)}>3</KeypadButton>
            </div>
          </div>
          <div className="columns is-mobile is-marginless">
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-4" onPress={() => this.inputDigit(4)}>4</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-5" onPress={() => this.inputDigit(5)}>5</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-6" onPress={() => this.inputDigit(6)}>6</KeypadButton>
            </div>
          </div>
          <div className="columns is-mobile is-marginless">
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-7" onPress={() => this.inputDigit(7)}>7</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-8" onPress={() => this.inputDigit(8)}>8</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-9" onPress={() => this.inputDigit(9)}>9</KeypadButton>
            </div>
          </div>
          <div className="columns is-mobile is-marginless">
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-0" onPress={() => this.inputDigit(0)}>0</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-dot" onPress={() => this.inputDot()}>●</KeypadButton>
            </div>
            <div className="column is-4" style={{padding: 5}}>
              <KeypadButton className="key-clear" onPress={() => clearDisplay ? this.clearDisplay() : this.clearAll()}>{clearText}</KeypadButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}