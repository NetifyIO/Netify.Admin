import React from 'react';
import { Route } from 'react-router-dom';
import {
  connect // connects our container component to redux
} from 'react-redux';
import {
  bindActionCreators // binds our action creators to be dispatched.
} from 'redux';

import Sidebar from '../components/team/Sidebar';
import Dashboard from '../components/team/Dashboard';
import Users from '../components/team/Users';
import Posts from '../components/team/Posts';
import * as postActions from '../actions/postActions';
import * as userActions from '../actions/userActions';
import './TeamAdmin.css'

class TeamAdmin extends React.Component {
  render() {
    return (
      <div className="TeamAdmin">
        <Sidebar />
        <div className="content-section">
          <Route path={`/team/dashboard`} component={Dashboard} />

          <Route path={`/team/users`} render={(props) => (
            <Users { ...props }
              loadUsers={this.props.actions.loadUsers}
              users={this.props.users}
            />
          )}
          />
          <Route path={`/team/posts`} render={(props) => (
            <Posts { ...props }
              loadPosts={this.props.actions.loadPosts}
              posts={this.props.posts}
            />
          )}
          />
        </div>
      </div>
    );
  }
}

// map redux store state to this container's props.
// state.* refers to objects from our reducers.
function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, postActions, userActions), dispatch)
  }
}

// Connect wraps our app component so it's connected to the redux store.
// i.e.
// connect(mapStateToProps, mapDispatchToProps)(App)
// with this function we can declare what parts of the store we want
// attached to our component as props.
// 2nd parameter to connect is mapDispatchToProps. omitting for now.
// omitting this 2nd arg will cause redux connect function to place a dispatch prop on this container.
// i.e. omitting 2nd param yields this.props.dispatch function for firing actions.
export default connect(mapStateToProps, mapDispatchToProps)(TeamAdmin);