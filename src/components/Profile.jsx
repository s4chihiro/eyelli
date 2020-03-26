import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
      <div className={classes.content}>
        <div>
          <img src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"/>
        </div>
        <div>ava + discription</div>
        <div>
          My posts
          <div>New posts</div>
          <div className={classes.posts}>
            <div className={classes.item}>post 1</div>
            <div className={classes.item}>post 2</div>
          </div>
        </div>
      </div>
    );
}

export default Profile;