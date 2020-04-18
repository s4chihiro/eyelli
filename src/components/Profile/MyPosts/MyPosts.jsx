import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

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

let maxLength300 = maxLengthCreator(300);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name='newPostBody' placeholder='Enter your new post' validate={[required, maxLength300]}/>
      <button>Post</button>
    </form>
  )
}

const AddPostReaduxForm = reduxForm({form: 'addPost'})(AddPostForm)

export default MyPosts;