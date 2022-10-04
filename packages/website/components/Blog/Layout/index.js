import React from 'react';
import Head from 'next/head';
import styles from './layout.module.scss';
import Navigation from '../../Navigation';
import Footer from '../../Footer';
import { Button } from '@un/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessagePlus } from '@fortawesome/pro-solid-svg-icons';
import { ChevronDown } from '@un/icons-react';

const Layout = ({ children, categories, head }) => (
  <>
    <Head>{head}</Head>
    <Navigation />
    <div className={styles.layout}>{children}</div>
    <ChevronDown />
    <Footer />
  </>
);

export default Layout;
