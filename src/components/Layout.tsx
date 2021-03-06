import React from 'react';
import Navbar from './Navbar';
import NextNprogress from 'nextjs-progressbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NextNprogress
        color="rgb(37, 99, 235)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />

      <Navbar />
      <div className="mx-auto px-4 sm:px-8 lg:px-32 max-w-screen-xl md:max-w-screen-md lg:max-w-screen-xl ">
        {children}
      </div>
    </div>
  );
};
export default Layout;
