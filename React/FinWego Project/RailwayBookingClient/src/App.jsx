import React, { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import { fetchLocalStorageDetails } from './Store/reducers/Users';
import tokenFetcher from './Helpers/TokenFetcher';
import NavBar from './Components/NavBar';
import Loader from './Components/Loader';
import useReduce from './Hooks/useReduce';
import './App.css';

const HomePage = React.lazy(() => import('./Containers/HomePage.jsx'));
const ErrorPage = React.lazy(() => import('./Containers/ErrorPage.jsx'));
const SnackBar = React.lazy(() => import('./Components/SnackBar'));

axios.defaults.headers.common.Authorizaton = tokenFetcher();
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App(props) {
  const [dispatch, state] = useReduce('user');
  const [snackBarStatus, setSnackBarStatus] = useState({
    flag: false,
    textToShow: '',
  });
  const { isAdmin, isFetched, isRejected, errorText } = state;

  useEffect(() => {
    dispatch(fetchLocalStorageDetails());
  }, []);

  useEffect(() => {
    setSnackBarStatus((prevState) => {
      if (isFetched) {
        return {
          flag: true,
          textToShow: 'success',
        };
      } else if (isRejected) {
        console.log('cominggg');
        return {
          flag: true,
          textToShow: 'error',
        };
      }
      return {
        ...prevState,
      };
    });
    return () => {
      setSnackBarStatus({ flag: false, textToShow: '' });
    };
  }, [isFetched, isRejected]);

  let routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
  if (isAdmin) {
    routes = <Route path="/admin" render={() => <div>Admin Page</div>} />;
  }
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Loader />}>
        {routes}
        {snackBarStatus.flag ? (
          <SnackBar
            flag={snackBarStatus.flag}
            textToShow={snackBarStatus.textToShow}
            errorToShow={errorText}
          />
        ) : null}
      </Suspense>
      <Loader />
    </Router>
  );
}

export default App;
