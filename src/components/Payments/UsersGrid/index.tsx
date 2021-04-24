import React, { useEffect, useState } from 'react'
import DataGrid from '../../UI/DataGrid'
import { ColDef, ColGroupDef } from 'ag-grid-community'
import { transactionsData } from '../../../data/transactions'

interface RowData {
  [key: string]: number | string | Date
}

const UsersGrid: React.FC = (): JSX.Element => {
  const [rowData, setRowData] = useState<RowData[]>([])
  const columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Amount',
      field: 'amount',
      filterParams: {
        filter: 'agNumberColumnFilter',
      },
    },
    {
      headerName: 'Reference',
      field: 'reference',
    },
    {
      headerName: 'Boost',
      field: 'boost',
      cellStyle: () => ({ color: '#00FF7F', fontWeight: '500' }),
    },
    {
      headerName: 'Customer',
      field: 'customer',
    },
  ]
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
        amount: `${sym}${amount.toFixed(2)}`,
        date,
      }
    })
    setRowData(data)
  }, [])
  return (
    <div className="payments-page-data-grid">
      <DataGrid columnDefs={columnDefs} data={rowData} />
    </div>
  )
}

export default UsersGrid
