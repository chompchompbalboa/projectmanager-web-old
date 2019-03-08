//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'

import projects from '../data/projects'

import AppContentContainer from './AppContentContainer'
import AppProject from './AppProject'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppProjects extends Component {
	projects = projects

	state = {
		ACTIVE_PROJECT: this.projects[0],
		ACTIVE_TABLE: this.projects[0].tables[0]
	}

	changeActiveProject = nextActiveProject => {
		this.setState({
			ACTIVE_PROJECT: nextActiveProject,
			ACTIVE_TABLE: nextActiveProject.tables[0]
		})
	}

	changeActiveTable = nextActiveTable => {
		this.setState({
			ACTIVE_TABLE: nextActiveTable
		})
	}

	render() {
		const { ACTIVE_PROJECT, ACTIVE_TABLE } = this.state
		return (
			<AppContentContainer>
				<AppProject
					activeProject={ACTIVE_PROJECT}
					activeTable={ACTIVE_TABLE}
					changeActiveProject={this.changeActiveProject}
					changeActiveTable={this.changeActiveTable}
					projects={projects}
					tables={ACTIVE_PROJECT.tables}
				/>
			</AppContentContainer>
		)
	}
}
