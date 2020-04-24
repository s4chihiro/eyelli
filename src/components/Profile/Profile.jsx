import React from 'react';
//import classes from './Profile.module.css';
import ProfileInfo from './PrfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = React.memo(props => {
  return (
    <div>
      <ProfileInfo 
        profile={props.profile} 
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
})

export default Profile;