import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';


const MyPosts = (props) => {
  console.log(props)
    
  let postsElements = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} ava={p.ava} /> )

  let newPostElement = React.createRef()

  let newPostText = props.state.newPostText

  let addPost = () => {
    if (newPostText === '') {return}
    let action = addPostActionCreator()
    props.dispatch(action)
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={classes.MyPosts}>
      <h3>My posts</h3>
      <div className={classes.wrapperAddPost}>
        <textarea onChange={onPostChange} ref={ newPostElement } value={ newPostText } />
        <button onClick={ addPost }>Post</button>
      </div>
      <div className={classes.posts}>
       { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;