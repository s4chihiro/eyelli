import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
    
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} ava={p.ava} /> )

  let newPostElement = React.createRef();


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.MyPosts}>
      <h3>My posts</h3>
      <div className={classes.wrapperAddPost}>
        <textarea onChange={onPostChange} ref={ newPostElement } value={ props.newPostText } />
        <button onClick={ props.addPost }>Post</button>
      </div>
      <div className={classes.posts}>
       { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;