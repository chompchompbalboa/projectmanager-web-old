//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, func, object } from 'prop-types'
import styled from 'styled-components'

import { API, graphqlOperation } from "aws-amplify"
import * as queries from '../graphql/queries'

import AppProjectContent from './AppProjectContent'
import AppProjectSidebar from './AppProjectSidebar'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppProject extends Component {

  state = {
    activeProject: null,
    activeTable: null,
    isLoading: true
  }

  componentDidMount = async () => {
    const {
      projects
    } = this.props
    await API.graphql(
      graphqlOperation(
        queries.getProject, { id: projects[0].id })
      ).then(({ data: { getProject }} ) => {
        console.log(getProject)
        this.updateStateAfterGettingProject(getProject)
      })
  }

  changeActiveProject = async (nextActiveProject) => {
    const {
      activeProject
    } = this.state
    if (activeProject.id !== nextActiveProject.id) {
      this.setState({
        activeProject: nextActiveProject,
        isLoading: true
      })
      await API.graphql(
        graphqlOperation(
          queries.getProject, { id: nextActiveProject.id })
        ).then(({ data: { getProject }} ) => {
          this.updateStateAfterGettingProject(getProject)
      })
    }
  }

  changeActiveTable = () => {

  }

  updateStateAfterGettingProject = (nextActiveProject) => {
    this.setState({
      activeProject: nextActiveProject,
      activeTable: nextActiveProject.tables && nextActiveProject.tables.items[0],
      isLoading: false
    })
  }

  render() {
    const {
      projects
    } = this.props
    const {
      activeProject,
      activeTable,
      isLoading
    } = this.state
    return (
      <Container>
        <AppProjectSidebar
          activeProject={activeProject}
          activeTable={activeTable}
          changeActiveProject={this.changeActiveProject}
          changeActiveTable={this.changeActiveTable}
          isLoading={isLoading}
          projects={projects}/>
        <AppProjectContent 
          activeTable={activeTable}
          changeActiveTable={this.changeActiveTable}
          isLoading={isLoading}/>
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppProject.propTypes = {
	activeProject: object,
	activeTable: object,
  changeActiveProject: func,
  projects: array,
  tables: array,
	changeActiveTable: func
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``
