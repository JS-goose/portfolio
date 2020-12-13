import React from 'react';
import SocialList from './socialList';

const SocialSection = () => {
  return (
    <div className='social-container'>
      <ul className='social-list'>
        <li>
          <div className='vertical-text'>Let&apos;s Connect!</div>
        </li>
        {/* <li> */}
          {/* <div className="socail-list-items-container"> */}
            <SocialList svgClassName={'social-list-svg'} mediumFillColor={'#421ED2'} liClassName={'pt-6'}/>
          {/* </div> */}
        {/* </li> */}
      </ul>
    </div>
  );
};

export default SocialSection;
