//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, layout } from '../config'
import projects from '../data/projects'

import AppContentContainer from './AppContentContainer'
import AppProject from './AppProject'
import AppProjectsChooseProject from './AppProjectsChooseProject'

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

	changeActiveProjectContent = nextActiveProjectContent => {
		this.setState({
			ACTIVE_PROJECT_CONTENT: nextActiveProjectContent
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
				<AppProjectsHeader>
					<AppProjectsChooseProject
						activeProject={ACTIVE_PROJECT}
						changeActiveProject={this.changeActiveProject}
						projects={this.projects}
					/>
				</AppProjectsHeader>
				<AppProject
					activeProject={ACTIVE_PROJECT}
					activeTable={ACTIVE_TABLE}
					changeActiveTable={this.changeActiveTable}
					tables={ACTIVE_PROJECT.tables}
				/>
			</AppContentContainer>
		)
	}
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const AppProjectsHeader = styled.div`
	z-index: 1000;
	position: fixed;
	top: 0;
	left: ${layout.SIDEBAR_WIDTH};
	width: calc(100vw - ${layout.SIDEBAR_WIDTH});
	height: ${layout.HEADER_HEIGHT};
	padding: 0 ${layout.PADDING};
	background-color: ${colors.BACKGROUND_SECONDARY};
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: -0.375px 0.375px 0.375px rgba(0, 0, 0, 0.16);
`
