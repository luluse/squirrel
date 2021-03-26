import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div className='pa2'>
    <input 
    className='pa3 ba b--light-green bg-washed-green'
    type='search' 
    placeholder='search friends' 
    onChange={searchChange}
    />
    </div>
  )
}

export default SearchBox;