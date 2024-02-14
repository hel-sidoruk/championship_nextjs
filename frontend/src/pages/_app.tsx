import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import localFont from '@next/font/local';
import '../styles/globals.scss';

const tenorSans = localFont({
  src: [
    {
      path: './TenorSans.woff',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#1F1A1A" />
      </Head>
      <Layout className={tenorSans.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
