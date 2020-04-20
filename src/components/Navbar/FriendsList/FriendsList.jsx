import React from 'react';
import classes from './FriendsList.module.css';
import { connect } from 'react-redux';
import FriendsItem from './FriendsItem/FriendsItem';
import { getUsers } from './../../../Redux/users-reducer'

const FriendsList = (props) => {

let friendsElements = props.users.map((u) => {
  if (u.followed) {
    return (
      <FriendsItem name={u.name} id={u.id} photo={u.photos.small} />
    )
  } else {
    return null;
  }
});

  return (
    <div className={classes.wrapperFriendsItem}>
      {friendsElements}
    </div>
  );
};


const mapStateToProps = state => ({
  users: state.usersPage.users,
})

export default connect(mapStateToProps, { getUsers})(FriendsList);