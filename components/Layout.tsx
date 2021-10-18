import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto px-8 max-w-screen-xl">{children}</div>
    </div>
  );
};
export default Layout;
