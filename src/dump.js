mutation createStructure($tableId:ID!) {
  createStructure(input:{
    header:"Due Date",
    position: 5,
    width:0.15,
    defaultSortOrder:ASC,
    type:STRING,
    structureTableId:$tableId
  }) {
    id
    header
    position
    width
    defaultSortOrder
    type
  }
}