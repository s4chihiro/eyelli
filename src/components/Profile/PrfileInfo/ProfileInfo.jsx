import React from 'react';
import classes from './ProfileInfo.module.css';
import avatar from './../../../assets/defavatar.png';
import Preloader from '../../common/Preloader/Preloader';
const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  } else {

    return (
      <div>

        <div className={classes.wallpaper}>
          <img src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt="wallpapper" />
        </div>

        <div className={classes.discriptionBlock}>

          <div className={classes.avatar}>
            <img src={props.profile.photos.large} alt="avatar" />
          </div>

          <div className={classes.discription}>
            <div className={classes.discriptionItem}>
              <span className={classes.name}>{props.profile.fullName}</span>
              <span className={classes.id}>#{props.profile.userId}</span>
            </div>
            <div className={classes.discriptionItem}>About me: {props.profile.aboutMe}</div>
            <div className={classes.discriptionItem}>City: Cherepovets</div>
            <div className={classes.discriptionItem}>Organization: USSOBO</div>
          </div>

        </div>
      </div>
    )
  }
}

export default ProfileInfo;