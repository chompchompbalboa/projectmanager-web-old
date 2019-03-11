// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      organization {
        id
        name
      }
    }
    nextToken
  }
}
`;
export const getOrganization = `query GetOrganization($id: ID!) {
  getOrganization(id: $id) {
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
export const listOrganizations = `query ListOrganizations(
  $filter: ModelOrganizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      employees {
        nextToken
      }
      projects {
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
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTable = `query GetTable($id: ID!) {
  getTable(id: $id) {
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
export const listTables = `query ListTables(
  $filter: ModelTableFilterInput
  $limit: Int
  $nextToken: String
) {
  listTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getStructure = `query GetStructure($id: ID!) {
  getStructure(id: $id) {
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
    nextToken
  }
}
`;
export const getRow = `query GetRow($id: ID!) {
  getRow(id: $id) {
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
export const listRows = `query ListRows($filter: ModelRowFilterInput, $limit: Int, $nextToken: String) {
  listRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      table {
        id
        name
      }
      cells {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCell = `query GetCell($id: ID!) {
  getCell(id: $id) {
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
export const listCells = `query ListCells(
  $filter: ModelCellFilterInput
  $limit: Int
  $nextToken: String
) {
  listCells(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      row {
        id
      }
      structure {
        id
        header
        position
        width
      }
      data {
        int
        float
        string
        bool
        datetime
      }
    }
    nextToken
  }
}
`;
