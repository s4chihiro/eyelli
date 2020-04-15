import React from 'react';
import classes from './Users.module.css';
import UserItem from './UserItem/UserItem';

const Users = (props) => {
  
  let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize ); 
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let users = props.users.map(u => {
    return (<UserItem
      id={u.id}
      name={u.name}
      followed={u.followed}
      status={u.status}
      photo={u.photos.small}
      followingInProgress={props.followingInProgress}
      follow={props.follow}
      unfollow={props.unfollow}
    />)
  });

    return (
      <div className={classes.usersWrap}>
        {
        pages.map(p => <span 
          className={props.currentPage === p && classes.selectedPage} 
          onClick={() => { props.onPageChanged(p) }}>{ p } </span>
        )}
 
          { users }

      </div>
    )
}

export default Users;