import React from 'react';
import classes from './FormControls.module.css';

const FormControl = ({ input, meta, ...props }) => {
  const showError = meta.error && meta.touched;
  return (
    <div className={classes.formControl + ' ' + (showError ? classes.error : '')}>
      {showError && <span>{meta.error}</span>}
      {props.children}
    </div>
  )
}

export const Textarea = (props) => {
  let { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  let { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}