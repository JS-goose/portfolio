import React from 'react';
import SocialList from './socialList';

const SocialSection = (props) => {
  return (
    <div className={`${props.socialContainerClassName} social-container`}>
      <ul className='social-list'>
        <li>
          <div className='vertical-text'>Let&apos;s Connect!</div>
        </li>
        <SocialList svgClassName={'social-list-svg'} mediumFillColor={'#421ED2'} liClassName={'pt-6'} />
      </ul>
    </div>
  );
};

export default SocialSection;
