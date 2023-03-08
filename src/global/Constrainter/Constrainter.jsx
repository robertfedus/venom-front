import React from 'react';
import './Constrainter.css';

const Constrainter = props => (
  <div className="Constrainter">
    <div className="inner-constrainter">{props.children}</div>
  </div>
);

export default Constrainter;
