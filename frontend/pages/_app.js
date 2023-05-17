import Layout from '@/components/Layout';
import '@/styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store/store';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>시흥 24시 센트럴 동물병원</title>
        <meta charSet='utf-8' />
      </Head>
      <Script
        strategy='beforeInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}
