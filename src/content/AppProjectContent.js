//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, layout } from '../config'

import HiddenScrollbarContainer from '../components/HiddenScrollbarContainer'
import Table from '../components/Table/Table'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class AppProjectContent extends Component {
	render() {
		const {
			activeTable: { rows, structure }
		} = this.props
		return (
			<Container>
				<Table rows={rows} structure={structure} />
			</Container>
		)
	}
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
