import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ColDef, ColGroupDef, GridApi, GridReadyEvent } from 'ag-grid-community'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import './style.scss'

interface IProps {
  data: {
    [key: string]: number | string | Date
  }[]
  columnDefs: (ColDef | ColGroupDef)[]
  setGridApi?: (api: GridApi) => void
}

const DataGrid: React.FC<IProps> = ({
  data,
  columnDefs,
  setGridApi,
}): JSX.Element => {
  const defaultColDef = {
    sortable: true,
    filterable: true,
    resizable: true,
  }
  const onGridReady = (params: GridReadyEvent) => {
    params.api.sizeColumnsToFit()
    if (setGridApi) setGridApi(params.api)
  }
  return (
    <div className="grid-container ag-theme-material">
      <div className="grid-wrapper">
        <AgGridReact
          rowData={data}
          onGridReady={onGridReady}
          rowSelection="single"
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          paginationAutoPageSize
          pagination
        />
      </div>
    </div>
  )
}

export default DataGrid
