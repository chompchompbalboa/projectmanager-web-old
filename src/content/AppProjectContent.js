//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, bool, shape } from 'prop-types'
import styled from 'styled-components'

import { colors, layout } from '../config'

import Table from '../components/Table/Table'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppProjectContent extends Component {
	render() {
		const {
      activeTable,
      isLoading
    } = this.props
		return (
			<Container>
        {activeTable && !isLoading &&
          <Table 
            rows={activeTable.rows && activeTable.rows.items} 
            structure={activeTable.structure && activeTable.structure.items} />
        }
			</Container>
		)
	}
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppProjectContent.propTypes = {
  activeTable: shape({
    rows: shape({
      items: array
    }),
    structure: array
  }),
  isLoading: bool
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
	position: fixed;
	top: 0;
	left: calc(${layout.SIDEBAR_WIDTH} + ${layout.PROJECT_SIDEBAR_WIDTH});
	width: calc(
		100vw - ${layout.SIDEBAR_WIDTH} - ${layout.PROJECT_SIDEBAR_WIDTH}
	);
	height: 100vh;
	padding: ${layout.PADDING};
	background-color: ${colors.BACKGROUND};
	overflow-y: scroll;
`
