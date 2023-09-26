import React from 'react';

const CustomToast = ({ message }) => (
  <div>
    <span>{message}</span>
    <img src={require('../image/plate2.png')} alt="Toast Image" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
    
  </div>
);

export default CustomToast;