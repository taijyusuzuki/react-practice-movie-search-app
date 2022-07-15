import React, { useState } from 'react';
import SelectBox, { SingleValue } from 'react-select';
import { Button } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { SearchCondition } from '@/interface/SearchCondition';
import { Years } from '@/interface/Years';
import options from '../data/Years';

const SearchCondition = ({search}: {search: (searchCondition: SearchCondition) => void}) => {
  const initialState = {
    Title: '',
    Year: options[0],
  };

  const [searchCondition, setSearchCondition] = useState(initialState);

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCondition({...searchCondition, [e.target.name]: e.target.value})
  };

  const handleSearchSelectChanges = (select: SingleValue<Years>) => {
    setSearchCondition({...searchCondition, [`${select?.name}`]: select?.value})
  }

  const callSearchFunction = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    search(searchCondition);
  };

  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      border: 'solid 1px black',
      cursor: 'pointer'
    }),
  };

  return (
    <form className="search">
      <h3 className="search-condition-item-name required">Title</h3>
      <input
        id="search-condition-title"
        name="Title"
        value={searchCondition.Title}
        onChange={handleSearchInputChanges}
        type="search"
        placeholder="Title"
      />
      <h3 className="search-condition-item-name">Year</h3>
      <SelectBox
        id="search-condition-year"
        name="Year"
        onChange={handleSearchSelectChanges}
        placeholder="YYYY"
        options={options}
        styles={customStyles}
        defaultValue={options[0]}
        isClearable={true}
      />
      <Button>
        <SearchIcon
          className='search-button'
          onClick={callSearchFunction}
          type="submit"
          fontSize="large"
        />
      </Button>
    </form>
  );
};

export default SearchCondition;
