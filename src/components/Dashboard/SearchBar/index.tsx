import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className="dashboard-page-search-bar">
      <FaSearch />
      <input
        placeholder="Search"
        type="text"
        className="dashboard-page-search-input"
      />
    </div>
  )
}

export default SearchBar
