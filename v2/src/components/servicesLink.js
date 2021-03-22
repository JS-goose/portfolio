import React from 'react';

const ServicesLink = () => {
  return (
    <span className='md:ml-0 lg:ml-40 p-2 transform hover:scale-105 transition duration-500 ease-in-out rounded-sm cta-buttons sm:w-full mb-4 sm:text-sm md:text-base xl:text-lg hover:underline bg-gradient-to-l from-myRed to-myPurple'>
      <a href='#services' rel='noopener noreferrer' className='flex justify-center items-center lg:font-semibold'>
        Browse My Services
        <svg
          className='fill-current ml-1'
          width='26'
          height='25'
          viewBox='0 0 26 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.888794 12.5C0.888794 19.4036 6.503 25 13.4285 25C20.354 25 25.9682 19.4036 25.9682 12.5C25.9682 5.59644 20.354 0 13.4285 0C6.503 0 0.888794 5.59644 0.888794 12.5ZM23.6882 12.5C23.6882 18.1484 19.0948 22.7273 13.4285 22.7273C7.76219 22.7273 3.16874 18.1484 3.16874 12.5C3.16874 6.85164 7.76219 2.27274 13.4285 2.27274C19.0948 2.27274 23.6882 6.85164 23.6882 12.5ZM17.1823 11.6965L18.7945 13.3035L13.4285 18.6525L8.06253 13.3035L9.67469 11.6965L13.4285 15.4384L17.1823 11.6965ZM17.1823 7.15103L13.4285 10.893L9.67469 7.15103L8.06253 8.75809L13.4285 14.1071L18.7945 8.75809L17.1823 7.15103Z'
          />
        </svg>
      </a>
    </span>
  );
};

export default ServicesLink;
