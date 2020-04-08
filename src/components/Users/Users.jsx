import React from 'react';
import classes from './Users.module.css';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount () {
    alert('did mount');
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }
  render () {

    let users = this.props.users.users.map(u => {
      return (
        <UserItem
          id={u.id}
          name={u.name}
          followed={u.followed}
          status={u.status}
          location={u.location}
          toggleFollow={this.props.toggleFollow}
        />
      )
    });
  
    return (
      <div className={classes.usersWrap}>
        <h1>Users</h1>
        {/*<button onClick={this.getUsers}>Get users</button>*/}
        { users }
      </div>
    )
  }
}

export default Users;