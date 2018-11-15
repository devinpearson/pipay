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
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
      </div>
    )
      {/*<div className="tile is-ancestor">*/}
        {/*<div className="calculator tile is-vertical is-12">*/}
          {/*<div className="tile">*/}
          {/*< KeypadDisplay value={displayValue}/>*/}
          {/*</div>*/}
          {/*<div className="tile">*/}
            {/*<div className="calculator-keypad">*/}
              {/*<div className="input-keys">*/}
                {/*<div className="function-keys">*/}
                  {/*<KeypadButton className="key-clear"*/}
                                {/*onPress={() => clearDisplay ? this.clearDisplay() : this.clearAll()}>{clearText}</KeypadButton>*/}
                  {/*<KeypadButton className="key-sign" onPress={() => this.toggleSign()}>±</KeypadButton>*/}
                  {/*<KeypadButton className="key-percent" onPress={() => this.inputPercent()}>%</KeypadButton>*/}
                {/*</div>*/}
                {/*<div className="digit-keys">*/}
                  {/*<KeypadButton className="key-0" onPress={() => this.inputDigit(0)}>0</KeypadButton>*/}
                  {/*<KeypadButton className="key-dot" onPress={() => this.inputDot()}>●</KeypadButton>*/}
                  {/*<KeypadButton className="key-1" onPress={() => this.inputDigit(1)}>1</KeypadButton>*/}
                  {/*<KeypadButton className="key-2" onPress={() => this.inputDigit(2)}>2</KeypadButton>*/}
                  {/*<KeypadButton className="key-3" onPress={() => this.inputDigit(3)}>3</KeypadButton>*/}
                  {/*<KeypadButton className="key-4" onPress={() => this.inputDigit(4)}>4</KeypadButton>*/}
                  {/*<KeypadButton className="key-5" onPress={() => this.inputDigit(5)}>5</KeypadButton>*/}
                  {/*<KeypadButton className="key-6" onPress={() => this.inputDigit(6)}>6</KeypadButton>*/}
                  {/*<KeypadButton className="key-7" onPress={() => this.inputDigit(7)}>7</KeypadButton>*/}
                  {/*<KeypadButton className="key-8" onPress={() => this.inputDigit(8)}>8</KeypadButton>*/}
                  {/*<KeypadButton className="key-9" onPress={() => this.inputDigit(9)}>9</KeypadButton>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div className="operator-keys">*/}
                {/*<KeypadButton className="key-divide" onPress={() => this.performOperation('/')}>÷</KeypadButton>*/}
                {/*<KeypadButton className="key-multiply" onPress={() => this.performOperation('*')}>×</KeypadButton>*/}
                {/*<KeypadButton className="key-subtract" onPress={() => this.performOperation('-')}>−</KeypadButton>*/}
                {/*<KeypadButton className="key-add" onPress={() => this.performOperation('+')}>+</KeypadButton>*/}
                {/*<KeypadButton className="key-equals" onPress={() => this.performOperation('=')}>=</KeypadButton>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      {/*</div>*/}

  }
}