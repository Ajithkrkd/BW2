import React from 'react'

const SearchItems = ({search ,setSearch}) => {
  return (
    <>
    <div className='mb-3'>
    <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="border w-full border-gray-300 p-2 outline-none"
        placeholder="search"
      />
    </div>
    </>
)
}

export default SearchItems