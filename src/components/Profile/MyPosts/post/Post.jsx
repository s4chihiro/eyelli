import React from 'react';
import classes from './Post.module.css'
import avatar from './../../../../assets/defavatar.png';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.contentPostItem}>
        <img className={classes.ava} src={avatar} alt="avatar" />
        <div className={classes.message}>{props.message}</div>
      </div>
      <div className={classes.like}>
        <div>{props.likesCount}</div>
        <img src="https://img.icons8.com/pastel-glyph/2x/facebook-like.png" alt="avatar" />
      </div>
    </div>
  )
}

export default Post;
