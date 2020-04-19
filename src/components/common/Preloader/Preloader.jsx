import React from 'react';
import loader from './../../../assets/loader.gif';
import classes from './Preloader.module.css';

const Preloader = (props) => {
  return (
    <div className={classes.preloader}>
      <img src={loader} alt='loading'/>
    </div>
  )
};

export default Preloader;