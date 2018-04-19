import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Toggle,
  ToggleInput,
  ToggleKnob,
  ToggleLabel,
  ToggleMessage
} from './styles'

export default class RTLToggle extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    const checked = evt.target.checked
    this.props.onChange(checked)
  }

  render () {
    const {checked} = this.props

    return (
      <Toggle>
        <ToggleLabel
          checked={checked}
        >
          <ToggleInput
            type='checkbox'
            aria-controls='rtl-status'
            checked={checked}
            onChange={this.handleChange}
          />
          <ToggleKnob
            checked={checked}
          >
            {'Enable right-to-left'}
          </ToggleKnob>
        </ToggleLabel>
        <ToggleMessage
          id='rtl-status'
          role='region'
          aria-live='polite'
        >
          {checked ? 'Right-to-left' : 'Left-to-right'}
        </ToggleMessage>
      </Toggle>
    )
  }
}

RTLToggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

RTLToggle.defaultProps = {
  checked: false
}
