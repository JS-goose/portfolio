import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    // layout-wrapper flex flex-col min-h-screen font-sans text-myBlack
    <div className="layout-wrapper">
      <Header />
      {/* grid grid-flow-col grid-cols-1 grid-rows-3 gap-y-12 h-screen justify-between flex-1 w-full */}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
