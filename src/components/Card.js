import React from 'react';

export const Card = ({children, title, target, isNewWindow}) => (
  <a href={target} target={isNewWindow ? '_blank' : '_self'} className="plugin-card flex items-center">
    <div className="w-11/12">
      <div className="plugin-card-title">{title}</div>
      <div className="text-gray-500">{children}</div>
    </div>
    <svg className="w-6 h-6 float-right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
  </a>
);