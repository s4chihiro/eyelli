import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.ava} />
      {props.message}
      <div>like</div>
    </div>
  )
}

export default Post;
