import React, { useState, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import useReduce from '../../Hooks/useReduce';
import Wrapper from '../Wrapper';
import { fetchLocalStorageDetails } from '../../Store/reducers/Users';
import '../../CSS/NavBar.css';
import Logout from '../Logout';

const Modal = React.lazy(() => import('../Modal'));

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const NavBar = () => {
  const [modalFlagDetails, setModalFlagDetails] = useState({
    flag: false,
    form: '',
  });
  const [dispatch, state] = useReduce('user');
  const {
    isUserLoggedIn,
    isFetched,
    loginData,
    isPending,
    token,
    isAdmin,
    currentUserDetails,
  } = state;
  const { userName } = currentUserDetails;
  const classes = useStyles();

  const popupLoginClick = (value) => {
    setModalFlagDetails(() => {
      return {
        flag: !modalFlagDetails.flag,
        form: value,
      };
    });
  };

  return (
    <nav>
      <div className="mainSection">
        <div id="homePageLink">
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        {isUserLoggedIn || isAdmin ? (
          <div className="Username">
            <Logout name={userName} />
          </div>
        ) : (
          <Wrapper>
            <div className="Signup">
              <Button onClick={() => popupLoginClick('signup')} color="primary">
                Signup
              </Button>
            </div>
            <div className="Login">
              <Button
                onClick={() => popupLoginClick('login')}
                color="secondary"
              >
                Login
              </Button>
            </div>
          </Wrapper>
        )}
        {modalFlagDetails.flag ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Backdrop className={classes.backdrop} open={modalFlagDetails.flag}>
              <Modal
                {...modalFlagDetails}
                handleClose={() => popupLoginClick(null)}
              />
            </Backdrop>
          </Suspense>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
