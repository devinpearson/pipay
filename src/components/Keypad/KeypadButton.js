import React from 'react'
import PointTarget from 'react-point'

export default class KeypadButton extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props

    return (
      <PointTarget onPoint={onPress}>
        <button className={`calculator-key ${className}`} {...props}/>
      </PointTarget>
    )
  }
}