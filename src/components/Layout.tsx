import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto px-4 sm:px-8 lg:px-32 max-w-screen-xl md:max-w-screen-md lg:max-w-screen-xl ">
        {children}
      </div>
    </div>
  );
};
export default Layout;
