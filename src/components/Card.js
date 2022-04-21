import React from 'react';

export const Card = ({children, target}) => (
  <a href={target} className="plugin-card flex">
    <div>
      <div class="plugin-card-title">Guide for using Foresight</div>
      {children}
    </div>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  </a>
);