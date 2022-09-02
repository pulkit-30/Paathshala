import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import style from '../../styles/search.module.css';

const SearchBox = () => {
  return (
    <form className={style.form}>
      <input type='text' placeholder='Search' className={style.searchBar} />
      <IconButton aria-label='delete' size='small' className={style.IconButton}>
        <SearchIcon fontSize='small' />
      </IconButton>
    </form>
  );
};

export default SearchBox;
