import React from 'react';
import TextField from '@material-ui/core/TextField';
import '../../CSS/Search.css';

export default function SearchInput({ onChange }) {
  return (
    <div className="Search">
      <TextField onChange={onChange} id="standard-search" label="Search field" type="search" />
    </div>
  );
}
