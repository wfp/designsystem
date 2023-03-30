import React from 'react';
import Head from 'next/head';
import styles from './layout.module.scss';
import Navigation from '../../Navigation';
import Footer from '../../Footer';

const Layout = ({ children, head }: any) => (
  <>
    <Head>{head}</Head>
    <Navigation />
    <div className={styles.layout}>{children}</div>
    {/* <ChevronDown /> */}
    <Footer />
  </>
);

export default Layout;
