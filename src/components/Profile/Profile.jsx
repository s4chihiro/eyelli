import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div className={classes.content}>
        <div>
          <img src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"/>
        </div>
        <div>ava + discription</div>
        <MyPosts />
      </div>
    );
}

export default Profile;