import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-myBlack bg-myPurple">
      <Header />
      <main className="flex flex-col h-screen justify-between flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
