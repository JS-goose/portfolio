import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <>
      {/* <div className='layout-wrapper sm:max-w-5xl md:max-w-4xl sm:mx-auto lg:max-w-full'> */}
        <Header />
        <main>{children}</main>
        <Footer />
      {/* </div> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
