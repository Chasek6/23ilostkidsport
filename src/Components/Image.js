import React from 'react';

const Image = (props) => {
  return (
    <img src={props.src} alt={props.alt} style={{ height: '150px', width: '150px' }} />
  );
};

export default Image;
