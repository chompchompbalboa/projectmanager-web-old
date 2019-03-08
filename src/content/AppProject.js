//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { func, object } from 'prop-types'
import styled from 'styled-components'

import AppProjectContent from './AppProjectContent'
import AppProjectSidebar from './AppProjectSidebar'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppProject = ({
	activeProject,
	activeTable,
	changeActiveProject,
	changeActiveTable,
	projects,
	tables
}) => {
	return (
		<Container>
			<AppProjectSidebar
				activeProject={activeProject}
				activeTable={activeTable}
				changeActiveProject={changeActiveProject}
				changeActiveTable={changeActiveTable}
				projects={projects}
				tables={tables}
			/>
			<AppProjectContent activeTable={activeTable} />
		</Container>
	)
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
AppProject.propTypes = {
	activeProject: object,
	activeTable: object,
	changeActiveProject: func,
	projects: object,
	changeActiveTable: func
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

export default AppProject
