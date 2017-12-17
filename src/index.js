import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import TeamAdmin from './containers/TeamAdmin';
import fakeAuth from './service/auth';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const UserAdmin = () => <h1>User Admin</h1>

const Root = () => (
    <Provider store={store}>
        <BrowserRouter basename="/admin/">
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={TeamAdmin} />
                <Route path="/user" component={UserAdmin} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    <Root />
    , document.getElementById('root')
);


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


registerServiceWorker();