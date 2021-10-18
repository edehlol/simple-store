import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

const defaultValue = {
  name: '',
  email: '',
  message: '',
};
const dude = {
  name: 'dude',
  email: 'theman@mandam.com',
  message: 'Suh dude',
};

export const MyContext = React.createContext(defaultValue);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContext.Provider value={dude}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
export default MyApp;
