//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import { colors, layout } from '../config'

import HiddenScrollbarContainer from '../components/HiddenScrollbarContainer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppProjectSidebar = ({ activeTable, changeActiveTable, tables }) => {
	return (
		<Container>
			{tables.map((table, index) => {
				return (
					<TableName
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
	top: ${layout.HEADER_HEIGHT};
	left: ${layout.SIDEBAR_WIDTH};
	width: ${layout.PROJECT_SIDEBAR_WIDTH};
	height: calc(100vh - ${layout.HEADER_HEIGHT});
	box-shadow: -0.375px 0.375px 0.375px rgba(0, 0, 0, 0.16);
	padding: ${layout.PADDING};
`

const TableName = styled.div`
	cursor: pointer;
	padding: 0.5vh 0 0.5vh 0.5vw;
	color: ${props => (props.isActive ? colors.PRIMARY : 'inherit')};
	border-left: 3px solid
		${props => (props.isActive ? colors.PRIMARY : colors.BACKGROUND_SECONDARY)};
	&:hover {
		color: ${colors.PRIMARY};
		border-left: 3px solid ${colors.PRIMARY};
	}
`

export default AppProjectSidebar
