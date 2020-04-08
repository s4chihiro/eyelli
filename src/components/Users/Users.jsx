import React from 'react';
import classes from './Users.module.css';
import UserItem from './UserItem/UserItem';
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount () {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.currentPage}&count=${this.props.users.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        debugger;
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.users.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render () {
    let pagesCount = Math.ceil( this.props.users.totalUsersCount / this.props.users.pageSize ); 
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let users = this.props.users.users.map(u => {
      return (
        <UserItem
          id={u.id}
          name={u.name}
          followed={u.followed}
          status={u.status}
          photo={u.photos.small}
          location={u.location}
          toggleFollow={this.props.toggleFollow}
        />
      )
    });
  
    return (
      <div className={classes.usersWrap}>
        <h1>Users</h1>
        {pages.map(p => <span 
          className={this.props.users.currentPage === p && classes.selectedPage} 
          onClick={(e) => { this.onPageChanged(p) }}>{ p } </span>)}
        { users }
      </div>
    )
  }
}

export default Users;