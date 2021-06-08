import React from 'react';
import ContactForm from './contactForm';

const GetStarted = () => {
  return (
    <section
      className='get-started-section-container md:p-2 flex flex-col items-center sm:text-base md:text-lg lg:text-xl'
      id='hire-me'>
        <ContactForm formTitle={`Let's get started on your project today!`} bgColor={`white`}/>
      </section>
  );
};

export default GetStarted;
