import React from 'react';
import '../css/custom.css';

export const GitHubBanner = (props) => (
  <div className="github-banner">
    <div>
      <img src="https://assets.website-files.com/6294d502b5093e77fbb91f34/62f10f090b52a64dd5f10858_Octocat-p-800.png" alt="GitHub Octopus" width="100"></img>
    </div>
    <div>
      <h2>{props.title}</h2>
      <a href="https://github.com/marketplace/thundra-foresight" target="_blank" className="cta">Try for free</a>
    </div>
  </div>
);