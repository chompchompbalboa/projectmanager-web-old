// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateOrganization = `subscription OnCreateOrganization {
  onCreateOrganization {
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
export const onUpdateOrganization = `subscription OnUpdateOrganization {
  onUpdateOrganization {
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
export const onDeleteOrganization = `subscription OnDeleteOrganization {
  onDeleteOrganization {
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
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
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
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
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
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
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
export const onCreateTable = `subscription OnCreateTable {
  onCreateTable {
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
export const onUpdateTable = `subscription OnUpdateTable {
  onUpdateTable {
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
export const onDeleteTable = `subscription OnDeleteTable {
  onDeleteTable {
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
export const onCreateStructure = `subscription OnCreateStructure {
  onCreateStructure {
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
export const onUpdateStructure = `subscription OnUpdateStructure {
  onUpdateStructure {
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
export const onDeleteStructure = `subscription OnDeleteStructure {
  onDeleteStructure {
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
export const onCreateRow = `subscription OnCreateRow {
  onCreateRow {
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
export const onUpdateRow = `subscription OnUpdateRow {
  onUpdateRow {
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
export const onDeleteRow = `subscription OnDeleteRow {
  onDeleteRow {
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
export const onCreateCell = `subscription OnCreateCell {
  onCreateCell {
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
export const onUpdateCell = `subscription OnUpdateCell {
  onUpdateCell {
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
export const onDeleteCell = `subscription OnDeleteCell {
  onDeleteCell {
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
