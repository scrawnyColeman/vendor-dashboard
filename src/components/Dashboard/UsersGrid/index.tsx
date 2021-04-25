import React, { useEffect, useState } from 'react'
import DataGrid from '../../UI/DataGrid'
import { ColDef, ColGroupDef } from 'ag-grid-community'
import { transactionsData } from '../../../data/transactions'
import { addSymToAmount } from '../../../utils'

interface RowData {
  [key: string]: number | string | Date
}

const UsersGrid: React.FC = (): JSX.Element => {
  const [rowData, setRowData] = useState<RowData[]>([])

  useEffect(() => {
    // fetch would go here
    const data = transactionsData.map((transaction: Transaction) => {
      const { customer, date, ref, selectedReward, value } = transaction
      const { email } = customer
      const { amount, currency } = value
      const { sym } = currency
      return {
        customer: email,
        reference: ref,
        boost: selectedReward,
        amount: amount.toFixed(2),
        date,
        sym,
      }
    })
    setRowData(data)
  }, [])

  const columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Amount',
      field: 'amount',
      filterParams: {
        filter: 'agNumberColumnFilter',
      },
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
      <DataGrid columnDefs={columnDefs} data={rowData} />
    </div>
  )
}

export default UsersGrid
