import './SearchSort.scss'
import React from 'react';

function SearchSort({ keyword, setKeyword, handleSearch, exitSearch }) {
  return (
    <div>
      <form className='form'>
        {keyword && (
          <button onClick={() => exitSearch()} className='exit-search-btn'>
            {keyword} X
          </button>
        )}
        <input
        className='search-input'
          type='text'
          id='keyword'
          name='keyword'
          placeholder='Search by keyword'
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            handleSearch(e);
          }}
        ></input>
        <button className='search-btn' onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default SearchSort;
