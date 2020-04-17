import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {
    
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} /> );

  let onSubmit = (formData) => {
    props.addPost(formData.newPostBody);
  }

  return (
    <div className={classes.MyPosts}>
      <h3>My posts</h3>
      <div className={classes.wrapperAddPost}>
        <AddPostReaduxForm onSubmit={onSubmit} />
      </div>
      <div className={classes.posts}>
       { postsElements }
      </div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' name='newPostBody' placeholder='Enter your new post'/>
      <button>Post</button>
    </form>
  )
}

const AddPostReaduxForm = reduxForm({form: 'addPost'})(AddPostForm)

export default MyPosts;