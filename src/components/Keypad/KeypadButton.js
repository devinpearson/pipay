import React from 'react'
import PointTarget from 'react-point'

export default class KeypadButton extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props

    return (
      <PointTarget onPoint={onPress}>
        <button className={`button is-large has-background-grey has-text-light is-fullwidth keypad-key ${className}`} {...props}/>
      </PointTarget>
    )
  }
}