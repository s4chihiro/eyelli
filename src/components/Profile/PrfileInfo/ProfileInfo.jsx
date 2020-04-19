import React from 'react';
import classes from './ProfileInfo.module.css';
import avatar from './../../../assets/defavatar.png';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
//import wallpapper from './../../../assets/wallpapper.jpg';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  } else {
  
  let photoAva = props.profile.photos.large ? props.profile.photos.large : avatar;

    return (
      <div>

        {/*<div className={classes.wallpaper}>
          <img src={wallpapper} alt="wallpapper" />
        </div>*/}

        <div className={classes.discriptionBlock}>

          <div className={classes.avatar}>
            <img src={photoAva} alt="avatar" />
          </div>

          <div className={classes.discription}>
            <div className={classes.discriptionItem}>
              <span className={classes.name}>{props.profile.fullName}</span>
              <span className={classes.id}>#{props.profile.userId}</span>
            </div>
            <ProfileStatus className={classes.discriptionItem} status={props.status} updateStatus={props.updateStatus}/>
           
          </div>

        </div>
      </div>
    )
  }
}

export default ProfileInfo;