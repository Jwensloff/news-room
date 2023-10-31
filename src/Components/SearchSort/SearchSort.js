import React from 'react';
import { useEffect, useState } from 'react';

function SearchSort({ keyword, setKeyword, handleSearch }) {
  return (
    <div>
      <form>
        <input
          type='text'
          id='keyword'
          name='keyword'
          placeholder='Search by keyword'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default SearchSort;
