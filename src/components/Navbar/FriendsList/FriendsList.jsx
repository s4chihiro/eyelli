import React from 'react';
import classes from './FriendsList.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendsList = (props) => {

  let friendsElements = props.friends.map(f => <FriendsItem name={f.name} id={f.id}/>);

  return (
    <div className={classes.wrapperFriendsItem}>
      {friendsElements}
    </div>
  )
}

export default FriendsList;