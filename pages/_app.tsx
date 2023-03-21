import type { AppProps } from 'next/app';

import GlobalStyle from '../public/styles/global-styles';
import Interceptor from '../components/hook/Interceptor';
import AppLayout from '@/common/AppLayout';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Interceptor />
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default App;
