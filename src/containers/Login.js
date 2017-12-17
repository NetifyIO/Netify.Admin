import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import fakeAuth from '../service/auth';

class Login extends React.Component {

    constructor() {
        super();
        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
    }

    state = {
        redirectToReferrer: false,
        username: "",
        password: ""
    }

    login = (event) => {
        event.preventDefault();
        this.props.actions.logInUser(this.state.username, this.state.password)
            .then((username, jwt) => {
                alert('Log in success', username, jwt);
            })
            .catch(error => {
                alert('Log in error.');
            });

        // fakeAuth.authenticate(() => {
        //     this.setState({ redirectToReferrer: true })
        // });
    }

    usernameChanged(event) {
        let username = event.target.value;
        this.setState({ username });
    }

    passwordChanged(event) {
        let password = event.target.value;
        this.setState({ password });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div>
                <div>{JSON.stringify(this.props.session)}</div>
                <p>You must log in to view the page at {from.pathname}</p>
                {/* <button onClick={this.login}>Log in</button> */}

                <form onSubmit={this.login}>
                    <input type="text" name="username" onChange={this.usernameChanged} value={this.state.username} />
                    <input type="password" name="password" onChange={this.passwordChanged} value={this.state.password} />
                    <input type="submit" value="Log in" />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      session: state.session
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Object.assign({}, sessionActions), dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);