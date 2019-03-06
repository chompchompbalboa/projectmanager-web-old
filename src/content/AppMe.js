//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'

import AppContentContainer from './AppContentContainer'
import UnderConstruction from './UnderConstruction'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppMe extends Component {
  render() {
    return (
      <AppContentContainer>
        <UnderConstruction
          from='AppMe'/>
      </AppContentContainer>
    )
  }
}
