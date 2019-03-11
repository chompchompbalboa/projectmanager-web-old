// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    organization {
      id
      name
      employees {
        nextToken
      }
      projects {
        nextToken
      }
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    organization {
      id
      name
      employees {
        nextToken
      }
      projects {
        nextToken
      }
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    organization {
      id
      name
      employees {
        nextToken
      }
      projects {
        nextToken
      }
    }
  }
}
`;
export const createOrganization = `mutation CreateOrganization($input: CreateOrganizationInput!) {
  createOrganization(input: $input) {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
    projects {
      items {
        id
        name
        unique_id
      }
      nextToken
    }
  }
}
`;
export const updateOrganization = `mutation UpdateOrganization($input: UpdateOrganizationInput!) {
  updateOrganization(input: $input) {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
    projects {
      items {
        id
        name
        unique_id
      }
      nextToken
    }
  }
}
`;
export const deleteOrganization = `mutation DeleteOrganization($input: DeleteOrganizationInput!) {
  deleteOrganization(input: $input) {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
    projects {
      items {
        id
        name
        unique_id
      }
      nextToken
    }
  }
}
`;
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    organization {
      id
      name
      employees {
        nextToken
      }
      projects {
        nextToken
      }
    }
    name
    unique_id
    tables {
      items {
        id
        name
      }
      nextToken
    }
  }
}
`;
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    organization {
      id
      name
      employees {
        nextToken
      }
      projects {
        nextToken
      }
    }
    name
    unique_id
    tables {
      items {
        id
        name
      }
      nextToken
    }
  }
}
`;
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    id
    organization {
      id
      name
      employees {
        nextToken
      }
      projects {
        nextToken
      }
    }
    name
    unique_id
    tables {
      items {
        id
        name
      }
      nextToken
    }
  }
}
`;
export const createTable = `mutation CreateTable($input: CreateTableInput!) {
  createTable(input: $input) {
    id
    name
    project {
      id
      organization {
        id
        name
      }
      name
      unique_id
      tables {
        nextToken
      }
    }
    structure {
      items {
        id
        header
        position
        width
      }
      nextToken
    }
    rows {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateTable = `mutation UpdateTable($input: UpdateTableInput!) {
  updateTable(input: $input) {
    id
    name
    project {
      id
      organization {
        id
        name
      }
      name
      unique_id
      tables {
        nextToken
      }
    }
    structure {
      items {
        id
        header
        position
        width
      }
      nextToken
    }
    rows {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteTable = `mutation DeleteTable($input: DeleteTableInput!) {
  deleteTable(input: $input) {
    id
    name
    project {
      id
      organization {
        id
        name
      }
      name
      unique_id
      tables {
        nextToken
      }
    }
    structure {
      items {
        id
        header
        position
        width
      }
      nextToken
    }
    rows {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createStructure = `mutation CreateStructure($input: CreateStructureInput!) {
  createStructure(input: $input) {
    id
    table {
      id
      name
      project {
        id
        name
        unique_id
      }
      structure {
        nextToken
      }
      rows {
        nextToken
      }
    }
    header
    position
    width
    defaultSortOrder
    type
    cells {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateStructure = `mutation UpdateStructure($input: UpdateStructureInput!) {
  updateStructure(input: $input) {
    id
    table {
      id
      name
      project {
        id
        name
        unique_id
      }
      structure {
        nextToken
      }
      rows {
        nextToken
      }
    }
    header
    position
    width
    defaultSortOrder
    type
    cells {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteStructure = `mutation DeleteStructure($input: DeleteStructureInput!) {
  deleteStructure(input: $input) {
    id
    table {
      id
      name
      project {
        id
        name
        unique_id
      }
      structure {
        nextToken
      }
      rows {
        nextToken
      }
    }
    header
    position
    width
    defaultSortOrder
    type
    cells {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createRow = `mutation CreateRow($input: CreateRowInput!) {
  createRow(input: $input) {
    id
    table {
      id
      name
      project {
        id
        name
        unique_id
      }
      structure {
        nextToken
      }
      rows {
        nextToken
      }
    }
    cells {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateRow = `mutation UpdateRow($input: UpdateRowInput!) {
  updateRow(input: $input) {
    id
    table {
      id
      name
      project {
        id
        name
        unique_id
      }
      structure {
        nextToken
      }
      rows {
        nextToken
      }
    }
    cells {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteRow = `mutation DeleteRow($input: DeleteRowInput!) {
  deleteRow(input: $input) {
    id
    table {
      id
      name
      project {
        id
        name
        unique_id
      }
      structure {
        nextToken
      }
      rows {
        nextToken
      }
    }
    cells {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createCell = `mutation CreateCell($input: CreateCellInput!) {
  createCell(input: $input) {
    id
    row {
      id
      table {
        id
        name
      }
      cells {
        nextToken
      }
    }
    structure {
      id
      table {
        id
        name
      }
      header
      position
      width
      defaultSortOrder
      type
      cells {
        nextToken
      }
    }
    data {
      int
      float
      string
      bool
      datetime
    }
  }
}
`;
export const updateCell = `mutation UpdateCell($input: UpdateCellInput!) {
  updateCell(input: $input) {
    id
    row {
      id
      table {
        id
        name
      }
      cells {
        nextToken
      }
    }
    structure {
      id
      table {
        id
        name
      }
      header
      position
      width
      defaultSortOrder
      type
      cells {
        nextToken
      }
    }
    data {
      int
      float
      string
      bool
      datetime
    }
  }
}
`;
export const deleteCell = `mutation DeleteCell($input: DeleteCellInput!) {
  deleteCell(input: $input) {
    id
    row {
      id
      table {
        id
        name
      }
      cells {
        nextToken
      }
    }
    structure {
      id
      table {
        id
        name
      }
      header
      position
      width
      defaultSortOrder
      type
      cells {
        nextToken
      }
    }
    data {
      int
      float
      string
      bool
      datetime
    }
  }
}
`;
