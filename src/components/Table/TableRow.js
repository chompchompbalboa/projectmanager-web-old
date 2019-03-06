//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { object } from 'prop-types'

import TableRowContainer from './TableRowContainer'
import TableCell from './TableCell'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TableRow = ({ data, structure }) => {
  const dataKeys = Object.keys(data)
  const cells = dataKeys.map(key => {
    return data[key]
  })
  return (
    <TableRowContainer>
      {cells.map((value, index) => {
        return (
          <TableCell
            key={index}
            value={value}
            width={structure[dataKeys[index]].width}/>
        )
      })}
    </TableRowContainer>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
TableRow.propTypes = {
  data: object,
  structure: object
}

export default TableRow