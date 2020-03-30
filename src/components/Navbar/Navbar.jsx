import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsList from './FriendsList/FriendsList';


const Navbar = (props) => {
  return (
    <nav className={classes.nav}>

      <div className={classes.item}>
        <NavLink to="/profile/me" activeClassName={classes.active}>Profile</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="settings" activeClassName={classes.active}>Settings</NavLink>
      </div>

      <div className={`${classes.item} ${classes.sitebarFriends}`}>
      <NavLink to="/frends" activeClassName={classes.active} className={classes.sitebarFriendsLink}>Friends</NavLink>
      <FriendsList friends={props.state.friends}/>
      </div>

    </nav>
  )
}

export default Navbar;