//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import _ from 'lodash'

//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
export default _.times(9, projectIndex => {
	return {
		id: projectIndex,
		name: 'Project ' + (projectIndex + 1),
		unique_id: '19-00' + projectIndex,
		tables: _.times(_.random(3, 10), tableIndex => {
			return {
				id: projectIndex + '' + tableIndex,
				name: 'Table ' + (tableIndex + 1)
			}
		})
	}
})
