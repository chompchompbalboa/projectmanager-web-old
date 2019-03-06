//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import AppProjectSidebar from './AppProjectSidebar'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppProject = ({
	activeProject,
	activeTable,
	changeActiveTable,
	tables
}) => {
	return (
		<Container>
			<AppProjectSidebar
				activeTable={activeTable}
				changeActiveTable={changeActiveTable}
				tables={tables}
			/>
		</Container>
	)
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
AppProject.propTypes = {
	name: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

export default AppProject
