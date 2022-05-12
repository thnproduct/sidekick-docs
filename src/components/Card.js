import React from 'react';

export const Card = ({children, title, target}) => (
  <a href={target} className="plugin-card flex items-center">
    <div className="w-11/12">
      <div class="plugin-card-title">{title}</div>
      <div className="text-gray-500">{children}</div>
    </div>
    <svg className="w-6 h-6 float-right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  </a>
);