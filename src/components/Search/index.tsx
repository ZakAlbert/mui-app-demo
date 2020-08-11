import React, { FC, useState } from 'react';
import { TextField } from '@material-ui/core';

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <TextField
      placeholder="Search pokemon"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)} />
  )
}

export default Search;
