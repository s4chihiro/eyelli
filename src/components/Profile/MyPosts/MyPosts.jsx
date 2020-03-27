import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
  return (
    <div className={classes.MyPosts}>
      My posts
      <textarea></textarea>
      <button>Add post</button>
      <div className={classes.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;