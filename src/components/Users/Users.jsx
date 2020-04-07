import React from 'react';
import classes from './Users.module.css';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

const Users = (props) => {
  let getUsers = () => {
    if (props.users.users.length === 0) {

      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          debugger;
          props.setUsers(response.data.items);
        });

    }
  }

  let users = props.users.users.map(u => {

    return (
      <UserItem
        id={u.id}
        name={u.name}
        followed={u.followed}
        status={u.status}
        location={u.location}
        toggleFollow={props.toggleFollow}
      />
    )
  });

  return (
    <div className={classes.usersWrap}>
      <h1>Users</h1>
      <button onClick={getUsers}>Get users</button>
      {users}
    </div>
  )
};

export default Users;
