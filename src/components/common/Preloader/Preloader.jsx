import React from 'react';
import loader from './../../../assets/loader.gif'

const Preloader = (props) => {
  return (
    <div>
      <img src={loader} alt='loading'/>
    </div>
  )
};

export default Preloader;