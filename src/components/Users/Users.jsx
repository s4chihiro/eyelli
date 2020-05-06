import React from 'react';
import classes from './Users.module.css';
import UserItem from './UserItem/UserItem';
import Paginator from './Paginator';

const Users = (props) => {

  let users = props.users.map((user) => {
    return (
      <UserItem
        id={user.id}
        name={user.name}
        followed={user.followed}
        status={user.status}
        photo={user.photos.small}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow}
        isAuth={props.isAuth}
      />
    )
  });

  return (
    <div className={classes.usersWrap}>

      <div className={classes.PagesWrap}>
        <Paginator
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
        />
      </div>

      {users}

    </div>
  )
}

export default Users;