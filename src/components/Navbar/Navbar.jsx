import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsList from './FriendsList/FriendsList';


const Navbar = (props) => {
  return (
    <nav className={classes.nav}>

      <div className={classes.item}>
        <NavLink to="/profile/me" activeClassName={classes.active}>
        <span role="img" aria-label="profile">&#128100;</span> Profile
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/messages" activeClassName={classes.active}>
          <span role="img" aria-label="messages">&#128233;</span> Messages
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.active}>
        <span role="img" aria-label="users">&#128101;</span> Users
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.active}>
        <span role="img" aria-label="News">&#128240;</span> News
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.active}>
        <span role="img" aria-label="music">&#127911;</span> Music
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="settings" activeClassName={classes.active}>
        <span role="img" aria-label="settings">&#128296;</span> Settings
        </NavLink>
      </div>

      <div className={`${classes.item} ${classes.sidebarFriends}`}>
      <NavLink to="/frends" activeClassName={classes.active} className={classes.sidebarFriendsLink}>Friends</NavLink>
      <FriendsList friends={props.state.friends} />
      </div>

    </nav>
  )
}

export default Navbar;