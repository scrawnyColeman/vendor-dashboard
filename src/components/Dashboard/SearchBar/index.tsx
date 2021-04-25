import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className="dashboard-page-search-bar">
      <FaSearch /> Search
    </div>
  )
}

export default SearchBar
