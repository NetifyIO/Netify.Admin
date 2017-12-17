import React from 'react';
import Header from './Header';
import './Users.css';

class Users extends React.Component {

    componentWillMount() {
        this.props.loadUsers();
    }

    userRow(user) {
        return (
            <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <Header page="Users" />
                <div className="content">
                    <table className="users">
                        <thead>
                            <tr>
                                <th>First</th>
                                <th>Last</th>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map(user => (
                                this.userRow(user)
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Users