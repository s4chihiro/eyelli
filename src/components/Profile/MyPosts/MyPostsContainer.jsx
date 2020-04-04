import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState();
    
  let newPostText = state.profilePage.newPostText;

  let addPost = () => {
    if (newPostText === '') {return}
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts 
      posts={state.profilePage.posts} 
      newPostText={newPostText} 
      updateNewPostText={ onPostChange } 
      addPost={ addPost } 
    />  
  );
};

export default MyPostsContainer;