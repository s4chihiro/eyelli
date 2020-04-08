import React from 'react';
import classes from './UserItem.module.css';

class UserItem extends React.Component {
  
  onClick = () => {
    this.props.toggleFollow(this.props.id);
  }
  render() {

    let followed = this.props.followed ? 'unfollow' : 'follow';
    return (
      <div className={classes.userItem}>
        <div className={classes.avaFollowWrap}>
          <div className={classes.ava}></div>
          <button onClick={ this.onClick } className={classes.follow}>
            { followed }
          </button>
        </div>
        <div className={classes.description}>
          <div>
            <div className={classes.name}>{ this.props.name } #{this.props.id}</div>
            <div className={classes.status}>{ this.props.status }</div>
          </div>
          <div className={classes.location}>
            {/*<div>{ props.location.country }</div>
            <div>{ props.location.city }</div>*/}
          </div>
        </div>
      </div>
    )
  }
}


export default UserItem;
