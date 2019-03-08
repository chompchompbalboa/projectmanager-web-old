// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    business {
      id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    business {
      id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    business {
      id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const createBusiness = `mutation CreateBusiness($input: CreateBusinessInput!) {
  createBusiness(input: $input) {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateBusiness = `mutation UpdateBusiness($input: UpdateBusinessInput!) {
  updateBusiness(input: $input) {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteBusiness = `mutation DeleteBusiness($input: DeleteBusinessInput!) {
  deleteBusiness(input: $input) {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    name
    unique_id
    tables {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    name
    unique_id
    tables {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    id
    name
    unique_id
    tables {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createTable = `mutation CreateTable($input: CreateTableInput!) {
  createTable(input: $input) {
    id
    project {
      id
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
    project {
      id
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
    project {
      id
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
  }
}
`;
export const updateStructure = `mutation UpdateStructure($input: UpdateStructureInput!) {
  updateStructure(input: $input) {
    id
    table {
      id
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
  }
}
`;
export const deleteStructure = `mutation DeleteStructure($input: DeleteStructureInput!) {
  deleteStructure(input: $input) {
    id
    table {
      id
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
  }
}
`;
export const createRow = `mutation CreateRow($input: CreateRowInput!) {
  createRow(input: $input) {
    id
    table {
      id
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
      id
      structure {
        id
        header
        position
        width
      }
      data {
        ... on CellDataInt {
          value
        }
        ... on CellDataFloat {
          value
        }
        ... on CellDataString {
          value
        }
        ... on CellDataBoolean {
          value
        }
        ... on CellDataAWSDateTime {
          value
        }
      }
    }
  }
}
`;
export const updateRow = `mutation UpdateRow($input: UpdateRowInput!) {
  updateRow(input: $input) {
    id
    table {
      id
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
      id
      structure {
        id
        header
        position
        width
      }
      data {
        ... on CellDataInt {
          value
        }
        ... on CellDataFloat {
          value
        }
        ... on CellDataString {
          value
        }
        ... on CellDataBoolean {
          value
        }
        ... on CellDataAWSDateTime {
          value
        }
      }
    }
  }
}
`;
export const deleteRow = `mutation DeleteRow($input: DeleteRowInput!) {
  deleteRow(input: $input) {
    id
    table {
      id
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
      id
      structure {
        id
        header
        position
        width
      }
      data {
        ... on CellDataInt {
          value
        }
        ... on CellDataFloat {
          value
        }
        ... on CellDataString {
          value
        }
        ... on CellDataBoolean {
          value
        }
        ... on CellDataAWSDateTime {
          value
        }
      }
    }
  }
}
`;
export const createCell = `mutation CreateCell($input: CreateCellInput!) {
  createCell(input: $input) {
    id
    structure {
      id
      table {
        id
      }
      header
      position
      width
      defaultSortOrder
      type
    }
    data {
      ... on CellDataInt {
        value
      }
      ... on CellDataFloat {
        value
      }
      ... on CellDataString {
        value
      }
      ... on CellDataBoolean {
        value
      }
      ... on CellDataAWSDateTime {
        value
      }
    }
  }
}
`;
export const updateCell = `mutation UpdateCell($input: UpdateCellInput!) {
  updateCell(input: $input) {
    id
    structure {
      id
      table {
        id
      }
      header
      position
      width
      defaultSortOrder
      type
    }
    data {
      ... on CellDataInt {
        value
      }
      ... on CellDataFloat {
        value
      }
      ... on CellDataString {
        value
      }
      ... on CellDataBoolean {
        value
      }
      ... on CellDataAWSDateTime {
        value
      }
    }
  }
}
`;
export const deleteCell = `mutation DeleteCell($input: DeleteCellInput!) {
  deleteCell(input: $input) {
    id
    structure {
      id
      table {
        id
      }
      header
      position
      width
      defaultSortOrder
      type
    }
    data {
      ... on CellDataInt {
        value
      }
      ... on CellDataFloat {
        value
      }
      ... on CellDataString {
        value
      }
      ... on CellDataBoolean {
        value
      }
      ... on CellDataAWSDateTime {
        value
      }
    }
  }
}
`;
