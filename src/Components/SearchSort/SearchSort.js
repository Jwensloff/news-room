import './SearchSort.scss'
import React from 'react';

function SearchSort({ keyword, setKeyword, handleSearch, exitSearch }) {
  return (
    <div>
      <form>
        {keyword && (
          <button onClick={() => exitSearch()} className='exit-search-btn'>
            {keyword} X
          </button>
        )}
        <input
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
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default SearchSort;
