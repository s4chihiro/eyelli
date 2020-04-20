import React from 'react';
import classes from './FriendsItem.module.css';
import { NavLink } from 'react-router-dom';
import photoAva from './../../../../assets/defavatar.png';



const FriendsItem = (props) => {
  let path = '/profile/' + props.id;
  return (
    <div className={classes.friendsItem}>
      <img className={classes.friendAva} src={props.photo ? props.photo : photoAva} alt='avatar'/>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

export default FriendsItem;
