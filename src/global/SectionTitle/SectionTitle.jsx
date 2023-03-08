import React from 'react';
import './SectionTitle.css';

const SectionTitle = props => {
  const style = {
    textAlign: props.align,
    color: props.color
  };

  return (
    <h2 className="Section-title" style={style} id={props.id}>
      {props.title}
    </h2>
  );
};

export default SectionTitle;
