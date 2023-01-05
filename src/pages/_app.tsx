import type { AppProps } from 'next/app';

import 'react-tippy/dist/tippy.css';
import '../styles/global.css';
import '../styles/variables.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
