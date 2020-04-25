import React from 'react';
import classes from './FormControls.module.css';

const FormControl = ({ input, meta: {touched, error}, children }) => {
  const showError = error && touched;
  return (
    <div className={classes.formControl + ' ' + (showError ? classes.error : '')}>
      {showError && <span>{error}</span>}
      {children}
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