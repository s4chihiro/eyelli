import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.wallpaper}>
        <img src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg"/>
      </div>
      <div className={classes.discriptionBlock}>
        <div className={classes.avatar}>
          <img src="https://arcanashop.ru/avatar/00/14/26050062.jpg"/>
        </div>
        <div className={classes.discription}>
          <div className={classes.discriptionItem}><span className={classes.name}>Dmitry K.</span></div>
          <div  className={classes.discriptionItem}>Date of Birth: 2 january</div>
          <div className={classes.discriptionItem}>City: Minsk</div>
          <div className={classes.discriptionItem}>Education: BSU' 11</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;