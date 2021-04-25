import React, { useEffect, useState } from 'react'
import DataGrid from '../../UI/DataGrid'
import { ColDef, ColGroupDef, GridApi } from 'ag-grid-community'
import { transactionsData } from '../../../data/transactions'
import { addSymToAmount, deepClone } from '../../../utils'
import Button from '../../UI/Button'
import { Hierarchy, Sizes } from '../../../constants/enums'

interface RowData {
  [key: string]: number | string
}

const UsersGrid: React.FC = (): JSX.Element => {
  const [rowData, setRowData] = useState<RowData[]>([])
  const [gridApi, setGridApi] = useState<GridApi>()

  useEffect(() => {
    const data = transactionsData.map((transaction: Transaction) => {
      const { customer, ref, selectedReward, value } = transaction
      const { email } = customer
      const { amount, currency } = value
      const { sym } = currency
      return {
        customer: email,
        reference: ref,
        boost: selectedReward,
        amount: amount.toFixed(2),
        sym,
      }
    })
    setRowData(data)
  }, [])

  const filterOutSelectedAttr = (
    attr: string,
    val: number | string
  ): RowData[] => {
    const data = deepClone(rowData)
    return data.filter((item: RowData) => item[attr] !== val)
  }

  const deleteRow = () => {
    const selectedNode = gridApi?.getSelectedNodes() || []
    const selectedReference = selectedNode[0]?.data.reference
    if (selectedReference) {
      setRowData(filterOutSelectedAttr('reference', selectedReference))
    }
  }

  const columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Amount',
      field: 'amount',
      filterParams: {
        filter: 'agNumberColumnFilter',
      },
      checkboxSelection: true,
      valueFormatter: (params) => {
        const { value, data } = params
        const { sym } = data
        return addSymToAmount(sym, value)
      },
    },
    {
      headerName: 'Reference',
      field: 'reference',
      filterParams: {
        filter: 'agTextColumnFilter',
      },
    },
    {
      headerName: 'Boost',
      field: 'boost',
      cellStyle: () => ({ color: '#00bfa5', fontWeight: '500' }),
      filterParams: {
        filter: 'agTextColumnFilter',
      },
    },
    {
      headerName: 'Customer',
      field: 'customer',
      filterParams: {
        filter: 'agTextColumnFilter',
      },
    },
  ]
  return (
    <div className="dashboard-page-data-grid">
      <div className="dashboard-page-data-grid-wrapper">
        <DataGrid
          columnDefs={columnDefs}
          data={rowData}
          setGridApi={setGridApi}
        />
      </div>
      <div className="dashboard-page-data-grid-btns-wrapper">
        <Button
          handleClick={deleteRow}
          size={Sizes.small}
          hierarchy={Hierarchy.secondary}
          label="Delete Row"
        />
      </div>
    </div>
  )
}

export default UsersGrid
