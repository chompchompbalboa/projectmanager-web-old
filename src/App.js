//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, enums } from './config'

import Amplify, { Auth } from 'aws-amplify'
import awsmobile from './aws-exports'
import { Authenticator } from 'aws-amplify-react'

import AppBusiness from './content/AppBusiness'
import AppContent from './content/AppContent'
import AppMe from './content/AppMe'
import AppProjects from './content/AppProjects'
import AppSettings from './content/AppSettings'
import AppDevelopment from './content/AppDevelopment'
import AppSidebar from './content/AppSidebar'

Amplify.configure(awsmobile)
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
class App extends Component {
	state = {
    activeContent: 'DEV',
    cognitoSub: null
  }
  
  componentDidMount = async () => {
    Auth.currentAuthenticatedUser().then((user) => {
      this.setState({
        cognitoSub: user.attributes.sub
      })
    })
  }

	changeActiveContent = nextActiveContent => {
		this.setState({
			activeContent: nextActiveContent
		})
	}

	render() {
    const { activeContent, cognitoSub } = this.state
		return (
      <Authenticator
        hideDefault>
        <Container>
          <AppSidebar
            activeContent={activeContent}
            activeContentChoices={enums.CONTENT}
            changeActiveContent={this.changeActiveContent}
          />
          {cognitoSub && 
            <AppContent>
              <AppMe 
                isActive={activeContent === 'ME'}/>
              <AppProjects 
                isActive={activeContent === 'PROJECTS'}/>
              <AppBusiness 
                isActive={activeContent === 'BUSINESS'}/>
              <AppSettings 
                isActive={activeContent === 'SETTINGS'}/>
              <AppDevelopment 
                cognitoSub={cognitoSub}
                isActive={activeContent === 'DEV'}/>
            </AppContent>
          }
        </Container>
      </Authenticator>
    )
	}
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
	z-index: 1000;
	color: ${colors.TEXT_DARK};
`

export default App
