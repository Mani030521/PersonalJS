import React,{Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Components/Layout/Landing';
import lazyComponentLoader from './HOC/LazyLoader';
import './App.css';

const Login = lazyComponentLoader(() => import('./Components/Login'));
const AsyncRegister = lazyComponentLoader(() => import('./Components/Register'));

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route exact path='/' component={Landing} />
        <Switch>
  <Route exact path='/login' render={() =>  <Login prop ={'asda'}/>}/>
          <Route path='/register' component={AsyncRegister}/>
        </Switch>
      </div>      
    </React.Fragment>
  );
}

export default App;
