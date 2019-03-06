//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, object } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { colors } from '../../config'

import TableAddRow from './TableAddRow'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Table extends Component {

  state = {
    sortOrder: 'desc',
    sortCategory: 'date'
  }

  sortData = (sortCategory, sortOrder) => {
    const {
      data
    } = this.props

    return _.orderBy(data, [sortCategory], [sortOrder])
  }

  onHeaderClick = (category) => {
    const {
      structure
    } = this.props
    const {
      sortOrder,
      sortCategory
    } = this.state

    const nextSortOrder = category === sortCategory ? (sortOrder === 'asc' ? 'desc' : 'asc') : structure[category].defaultSortOrder
    this.setState({
      sortOrder: nextSortOrder,
      sortCategory: category
    })
  }

  render() {
    const {
      structure
    } = this.props

    const {
      sortOrder,
      sortCategory
    } = this.state

    const sortedData = this.sortData(sortCategory, sortOrder)

    return (
      <Container>
        <TableHeader
          sampleRow={sortedData[0]}
          sortOrder={sortOrder}
          sortCategory={sortCategory}
          onHeaderClick={this.onHeaderClick}
          structure={structure}/>
        <TableAddRow 
          structure={structure}/>
        {sortedData.map((row, index) => {
          return (
            <TableRow 
              key={index}
              data={row}
              structure={structure}/>
        )})}
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Table.propTypes = {
  data: array,
  structure: object
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  background-color: ${ colors.BACKGROUND_SECONDARY };
  color: ${ colors.TEXT_DARK };
  box-shadow: 1px 1px 4px ${ colors.BOX_SHADOW };
  display: flex;
  flex-direction: column;
`