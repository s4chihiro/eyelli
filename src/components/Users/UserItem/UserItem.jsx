import React from 'react';
import classes from './UserItem.module.css';

const UserItem = (props) => {

  let followed = props.followed ? 'unfollow' : 'follow';

  let onClick = () => {
    props.toggleFollow(props.id);
  }

  return (
    <div className={classes.userItem}>
      <div className={classes.avaFollowWrap}>
        <div className={classes.ava}></div>
        <button onClick={ onClick } className={classes.follow}>
          { followed }
        </button>
      </div>
      <div className={classes.description}>
        <div>
          <div className={classes.name}>{ props.name } #{props.id}</div>
          <div className={classes.status}>{ props.status }</div>
        </div>
        <div className={classes.location}>
          {/*<div>{ props.location.country }</div>
          <div>{ props.location.city }</div>*/}
        </div>
      </div>
    </div>
  )
}

export default UserItem;
