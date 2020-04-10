import React from 'react';
import classes from './UserItem.module.css';
import photoAva from './../../../assets/defavatar.png';
import { NavLink } from 'react-router-dom';

class UserItem extends React.Component {
  
  onClick = () => {
    this.props.toggleFollow(this.props.id);
  }
  render() {
    let photo = this.props.photo ? this.props.photo : photoAva;

    let followed = this.props.followed ? 'unfollow' : 'follow';
    return (
      <div className={classes.userItem}>
        <div className={classes.avaFollowWrap}>
          <NavLink to={'/profile/' + this.props.id}>
            <img className={classes.ava} src={ photo } alt={'avatar'}/>
          </NavLink>
          <button onClick={ this.onClick } className={classes.follow}>
            { followed }
          </button>
        </div>
        <div className={classes.description}>
          <div>
            <div className={classes.name}>{ this.props.name }</div>
    <div className={classes.status}>{ this.props.status }</div>
          </div>
          <div className={classes.location}>
            <div>#{this.props.id}</div>
            {/*<div>{ props.location.country }</div>
            <div>{ props.location.city }</div>*/}
          </div>
        </div>
      </div>
    )
  }
}


export default UserItem;
