import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/Amitansu-priyadarsan" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
    
    
    <div>
      <a href="https://www.linkedin.com/in/amitansu-priyadarsan/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/i_amitansu/?next=%2F" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;


