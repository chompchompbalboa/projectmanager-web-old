// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateBusiness = `subscription OnCreateBusiness {
  onCreateBusiness {
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
export const onUpdateBusiness = `subscription OnUpdateBusiness {
  onUpdateBusiness {
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
export const onDeleteBusiness = `subscription OnDeleteBusiness {
  onDeleteBusiness {
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
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateTable = `subscription OnCreateTable {
  onCreateTable {
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
export const onUpdateTable = `subscription OnUpdateTable {
  onUpdateTable {
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
export const onDeleteTable = `subscription OnDeleteTable {
  onDeleteTable {
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
export const onCreateStructure = `subscription OnCreateStructure {
  onCreateStructure {
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
export const onUpdateStructure = `subscription OnUpdateStructure {
  onUpdateStructure {
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
export const onDeleteStructure = `subscription OnDeleteStructure {
  onDeleteStructure {
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
export const onCreateRow = `subscription OnCreateRow {
  onCreateRow {
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
export const onUpdateRow = `subscription OnUpdateRow {
  onUpdateRow {
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
export const onDeleteRow = `subscription OnDeleteRow {
  onDeleteRow {
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
export const onCreateCell = `subscription OnCreateCell {
  onCreateCell {
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
export const onUpdateCell = `subscription OnUpdateCell {
  onUpdateCell {
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
export const onDeleteCell = `subscription OnDeleteCell {
  onDeleteCell {
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
