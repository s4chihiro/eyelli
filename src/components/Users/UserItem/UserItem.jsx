import React from 'react';
import classes from './UserItem.module.css';

class UserItem extends React.Component {
  
  onClick = () => {
    this.props.toggleFollow(this.props.id);
  }
  render() {
    let photo = this.props.photo ? this.props.photo : 'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png';

    let followed = this.props.followed ? 'unfollow' : 'follow';
    return (
      <div className={classes.userItem}>
        <div className={classes.avaFollowWrap}>
          <img className={classes.ava} src={ photo }/>
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
