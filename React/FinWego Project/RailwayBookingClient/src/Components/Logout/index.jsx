/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { setLogOut } from '../../Store/reducers/Users';
import useReduce from '../../Hooks/useReduce';

export default function Logout(props) {
  const { name } = props;
  const [dispatch] = useReduce();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (typeof document !== 'undefined') {
      document.cookie = 'access-token=; Max-Age=0';
      localStorage.getItem('isUserLoggedIn')
        && localStorage.removeItem('isUserLoggedIn');
      localStorage.getItem('userName') && localStorage.removeItem('userName');
      localStorage.getItem('isAdminLoggedIn') && localStorage.removeItem('isAdminLoggedIn');
      dispatch(setLogOut());
    }
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
