//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, enums } from './config'

import AppBusiness from './content/AppBusiness'
import AppContent from './content/AppContent'
import AppMe from './content/AppMe'
import AppProjects from './content/AppProjects'
import AppSettings from './content/AppSettings'
import AppSidebar from './content/AppSidebar'

import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react'
Amplify.configure(awsmobile)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
class App extends Component {

  state = {
    ACTIVE_CONTENT: 'PROJECTS'
  }

  changeActiveContent = (nextActiveContent) => {
    this.setState({
      ACTIVE_CONTENT: nextActiveContent
    })
  }

  render() {
    const {
      ACTIVE_CONTENT
    } = this.state

    return (
      <Container>
        <AppSidebar
          activeContent={ACTIVE_CONTENT}
          activeContentChoices={enums.CONTENT}
          changeActiveContent={this.changeActiveContent}/>
        <AppContent>
          {ACTIVE_CONTENT === 'ME' && <AppMe/>}
          {ACTIVE_CONTENT === 'PROJECTS' && <AppProjects/>}
          {ACTIVE_CONTENT === 'BUSINESS' && <AppBusiness/>}
          {ACTIVE_CONTENT === 'SETTINGS' && <AppSettings/>}
        </AppContent>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  color: ${ colors.TEXT_DARK };
`

export default withAuthenticator(App, true)