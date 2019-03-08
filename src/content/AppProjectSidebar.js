//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { colors, layout, timing } from '../config'

import AppProjectsChooseProject from './AppProjectsChooseProject'
import HiddenScrollbarContainer from '../components/HiddenScrollbarContainer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppProjectSidebar = ({
	activeProject,
	activeTable,
	changeActiveProject,
	changeActiveTable,
	projects,
	tables
}) => {
	return (
		<Container>
			<AppProjectsChooseProject
				activeProject={activeProject}
				changeActiveProject={changeActiveProject}
				projects={projects}
			/>
			{tables.map((table, index) => {
				return (
					<TableName
						key={table.id}
						isActive={activeTable.id === table.id}
						onClick={() => changeActiveTable(table)}>
						{table.name}
					</TableName>
				)
			})}
		</Container>
	)
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled(HiddenScrollbarContainer)`
	background-color: ${colors.BACKGROUND_SECONDARY};
	position: fixed;
	top: 0;
	left: ${layout.SIDEBAR_WIDTH};
	width: ${layout.PROJECT_SIDEBAR_WIDTH};
	height: 100vh;
`

const TableName = styled.div`
	cursor: pointer;
	padding: calc(${layout.PADDING} / 1.5);
	font-size: 13px;
	font-weight: semibold;
	background-color: ${props =>
		props.isActive ? colors.BACKGROUND : colors.BACKGROUND_SECONDARY};
	transition: all ${timing.TRANSITION_DURATION};
	&:hover {
		background-color: ${colors.BACKGROUND};
	}
`

export default AppProjectSidebar
