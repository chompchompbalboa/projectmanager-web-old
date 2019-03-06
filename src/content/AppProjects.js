//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, enums, layout } from '../config'

import AppProjectChooseContent from './AppProjectChooseContent'
import AppProjectHours from './AppProjectHours'
import AppProjectsChooseProject from './AppProjectsChooseProject'
import AppContentContainer from './AppContentContainer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppProjects extends Component {

  projects = [
    { id: 0, name: 'Amazon Spheres', uniqueId: '17-236' },
    { id: 1, name: 'Four Winds', uniqueId: '17-108' },
    { id: 2, name: 'Ft. McDowell', uniqueId: '18-104' },
    { id: 3, name: 'Tokyo Disneyland', uniqueId: '18-118' },
  ]

  state = {
    ACTIVE_PROJECT: this.projects[0],
    ACTIVE_PROJECT_CONTENT: 'HOURS'
  }

  changeActiveProject = (nextActiveProject) => {
    this.setState({
      ACTIVE_PROJECT: nextActiveProject
    })
  }

  changeActiveProjectContent = (nextActiveProjectContent) => {
    this.setState({
      ACTIVE_PROJECT_CONTENT: nextActiveProjectContent
    })
  }

  render() {
    const {
      ACTIVE_PROJECT,
      ACTIVE_PROJECT_CONTENT,
    } = this.state
    return (
      <AppContentContainer>
        <AppProjectsHeader>
          <AppProjectsChooseProject 
            activeProject={ACTIVE_PROJECT}
            changeActiveProject={this.changeActiveProject}
            projects={this.projects}/>
        </AppProjectsHeader>
        <AppProjectsContent>
          <AppProjectChooseContent
            activeProjectContent={ACTIVE_PROJECT_CONTENT}
            activeProjectContentChoices={enums.PROJECT_CONTENT}
            changeActiveProjectContent={this.changeActiveProjectContent}/>
          {ACTIVE_PROJECT_CONTENT === 'HOURS' && <AppProjectHours project={ACTIVE_PROJECT}/>}
        </AppProjectsContent>
      </AppContentContainer>
    )
  }
}

const AppProjectsHeader = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: ${ layout.SIDEBAR_WIDTH };
  width: calc(100vw - ${ layout.SIDEBAR_WIDTH });
  height: ${ layout.HEADER_HEIGHT };
  padding: 0 2.5vw;
  background-color: ${ colors.BACKGROUND_SECONDARY };
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -0.375px 0.375px 0.375px rgba(0, 0, 0, 0.16);
`

const AppProjectsContent = styled.div`
  position: fixed;
  top: ${ layout.HEADER_HEIGHT };
  left: ${ layout.SIDEBAR_WIDTH };
  width: calc(100vw - ${ layout.SIDEBAR_WIDTH });
  height: calc(100vh - ${ layout.HEADER_HEIGHT });
  padding: 3vh 2.5vw;
  overflow: scroll;
`
