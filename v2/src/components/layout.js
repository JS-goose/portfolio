import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Footer from './footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-myBlack bg-myPurple">
      <Header />
      <main className="grid grid-flow-col grid-cols-1 grid-rows-3 gap-y-64 h-screen justify-between flex-1 w-full max-w-6xl mx-auto">
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
