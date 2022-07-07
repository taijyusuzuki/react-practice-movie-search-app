import React, { useState } from 'react';

const SearchMovie = ({search}: {search: (searchValue: string) => void}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    search(searchValue);
    // resetInputField();
  };

  return (
    <form className="search">
      <input
        className="search-condition-field"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input
        className="search-button"
        onClick={callSearchFunction}
        type="submit"
        value="Search"
      />
      <input
        className="reset-button"
        onClick={resetInputField}
        type="button"
        value="Reset"
      />
    </form>
  );
};

export default SearchMovie;
