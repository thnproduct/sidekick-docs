import React from 'react';
import '../css/custom.css';

export const NewFeature = (props) => (
  <div className="newfeature-banner">
    <div>
      <span>New feature</span>
      <h3>{props.title}</h3>
      <div className='desc'>{props.desc}</div>
    </div>
    <a className="cta" href={props.link}>Learn more!</a>
  </div>
);