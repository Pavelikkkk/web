import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Table = ({ entities, onDelete, onEdit, onDeleteSelected }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Title', width: 150, sortable: true },
    { field: 'description', headerName: 'Description', width: 200, sortable: true },
    { field: 'price', headerName: 'Price', width: 100, type: 'number' },
    {
      field: 'total',
      headerName: 'Total',
      width: 100,
      type: 'number',
      valueGetter: (params) => params.row.price * params.row.quantity,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <Button variant="contained" color="primary" onClick={() => onEdit(params.row.id)}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={() => onDelete(params.row.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={entities}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
        onSelectionModelChange={(selectionModel) => {
          const selectedIDs = new Set(selectionModel);
          onDeleteSelected(Array.from(selectedIDs));
        }}
      />
    </div>
  );
};

export default Table;