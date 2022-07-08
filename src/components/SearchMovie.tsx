import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { MdClear } from 'react-icons/md';
import { SearchCondition } from '@/interface/SearchCondition';
import options from '../data/Options';

const SearchMovie = ({search}: {search: (searchCondition: SearchCondition) => void}) => {
  const initialState = {
    Title: '',
    Year: ''
  };

  const [searchCondition, setSearchCondition] = useState(initialState);

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCondition({...searchCondition, [e.target.name]: e.target.value})
  };

  const handleSearchSelectChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCondition({...searchCondition, [e.target.name]: e.target.value})
  }

  const resetInputField = () => {
    setSearchCondition(initialState);
  };

  const callSearchFunction = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    search(searchCondition);
  };

  return (
    <form className="search">
      <text className="search-condition-item-name">Title:</text>
      <input
        id="search-condition-title"
        name="Title"
        value={searchCondition.Title}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Title"
      />
      <text className="search-condition-item-name">Year:</text>
      <select
        id="search-condition-year"
        name="Year"
        value={searchCondition.Year}
        onChange={handleSearchSelectChanges}
        placeholder="YYYY"
      >
        {options.map((option) => {
          return (
            <option value={option.value}>{option.label}</option>
          )
        })}
      </select>
      <GoSearch
        className="search-button"
        onClick={callSearchFunction}
        type="submit"
        size='2rem'
      />
      <MdClear
        className="reset-button"
        onClick={resetInputField}
        type="button"
        size='2rem'
      />
    </form>
  );
};

export default SearchMovie;
