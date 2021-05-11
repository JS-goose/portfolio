import React from 'react';
import checkmark from '../images/icons/check.svg';

const HireLink = (props) => {
  return (
    <span className='flex bg-myRed p-2 rounded-sm cta-buttons justify-center mb-4 transform hover:scale-105 transition-all duration-700 ease-in-out sm:w-full sm:text-sm md:text-base xl:text-lg hover:underline hover:bg-myDarkRed'>
      <a href={props.href} rel='noopener noreferrer' className='flex justify-center items-center lg:font-semibold'>
        {props.textContent}
        <img src={checkmark} alt='a checkmark icon' className='pl-2' />
      </a>
    </span>
  );
};

export default HireLink;
