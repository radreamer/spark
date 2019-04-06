import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SpinnerIcon } from './style'

class Spinner extends Component {
  render() {
    const { size } = this.props

    return <SpinnerIcon size={size} className="fas fa-spinner fa-spin" />
  }
}

Spinner.propTypes = {
  size: PropTypes.number,
}

export default Spinner
