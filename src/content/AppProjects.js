//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, string } from 'prop-types'

import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import * as queries from '../graphql/queries'

import AppContentContainer from './AppContentContainer'
import AppProject from './AppProject'
import Error from '../components/Error'
import Loading from '../components/Loading'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AppProjects = ({ organizationId, isActive}) =>  {
  return (
    <AppContentContainer
      isActive={isActive}>
      {isActive && 
        <Connect query={graphqlOperation(queries.getOrganization, { id: organizationId })}>
          {({ data: { getOrganization }, loading, error }) => {
            if (loading) return <Loading />
            if (error) return <Error />

            const { 
              projects
              } = getOrganization
              return (
              <AppProject
                projects={projects.items}/>
              )
            }}
          </Connect>
      }
    </AppContentContainer>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
AppProjects.propTypes = {
  organizationId: string,
  isActive: bool
}

export default AppProjects
