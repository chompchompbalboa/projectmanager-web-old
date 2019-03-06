//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { func, object, oneOf, string } from 'prop-types'

import { colors } from '../../config'

import TableCell from './TableCell'
import TableRowContainer from './TableRowContainer'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TableHeader = ({ onHeaderClick, sampleRow, sortOrder, sortCategory, structure }) => {

  // The field names in the data object serve as our column names. We need
  // to create a new array to hold those names to pass to TableRow
  const headers = Object.keys(sampleRow).map(header => {
    return header.charAt(0).toUpperCase() + header.slice(1).toLowerCase()
  })

  return (
    <TableRowContainer
      backgroundColor={colors.ACCENT}
      isHeader>
      {headers.map((value, index) => {
        const category = value.toLowerCase()
        const valueWithSuffix = () => {
          if (category === sortCategory) {
            let arrowDirection = sortOrder === structure[category].defaultSortOrder ? 'DOWN' : 'UP'
            return arrowDirection === 'UP' ? <span>{value}&nbsp;&nbsp;&#9650;</span> : <span>{value}&nbsp;&nbsp;&#9660;</span>
          }
          return value
        }
        return (
          <TableCell
            key={index}
            onClick={() => onHeaderClick(category)}
            value={valueWithSuffix()}
            valueCursor={'pointer'}
            width={structure[category].width}/>
        )
      })}
    </TableRowContainer>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
TableHeader.propTypes = {
  onHeaderClick: func,
  sampleRow: object,
  sortCategory: string,
  sortOrder: oneOf([
    'asc',
    'desc'
  ]),
  structure: object
}

export default TableHeader