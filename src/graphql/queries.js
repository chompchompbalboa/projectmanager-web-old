// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      business {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getBusiness = `query GetBusiness($id: ID!) {
  getBusiness(id: $id) {
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
export const listBusinesss = `query ListBusinesss(
  $filter: ModelBusinessFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      employees {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
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
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      unique_id
      tables {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTable = `query GetTable($id: ID!) {
  getTable(id: $id) {
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
export const listTables = `query ListTables(
  $filter: ModelTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getStructure = `query GetStructure($id: ID!) {
  getStructure(id: $id) {
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
export const listStructures = `query ListStructures(
  $filter: ModelStructureFilterInput
  $limit: Int
  $nextToken: String
) {
  listStructures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getRow = `query GetRow($id: ID!) {
  getRow(id: $id) {
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
export const listRows = `query ListRows($filter: ModelRowFilterInput, $limit: Int, $nextToken: String) {
  listRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      table {
        id
      }
      cells {
        id
      }
    }
    nextToken
  }
}
`;
export const getCell = `query GetCell($id: ID!) {
  getCell(id: $id) {
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
export const listCells = `query ListCells(
  $filter: ModelCellFilterInput
  $limit: Int
  $nextToken: String
) {
  listCells(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
