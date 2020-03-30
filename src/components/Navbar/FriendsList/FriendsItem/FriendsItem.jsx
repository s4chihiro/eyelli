import React from 'react';
import classes from './FriendsItem.module.css';
import { NavLink } from 'react-router-dom';



const FriendsItem = (props) => {
  let path = '/friend/' + props.id;
  return (
    <div className={classes.friendsItem}>
      <div className={classes.friendAva}></div>
  <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

export default FriendsItem;
