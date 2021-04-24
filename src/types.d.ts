interface navLink {
  path: string
  label: string
  icon: JSX.Element
}

interface Currency {
  sym: string
  name: string
}

interface TransactionAmount {
  amount: number
  currency: Currency
}

interface Customer {
  id: number
  email: string
}

interface Transaction {
  transactionId: number
  date: Date
  value: TransactionAmount
  ref: string
  selectedReward: string
  customer: Customer
}
