import React from 'react';
import Head from 'next/head';
import { Wrapper } from '@wfp/react';
import Layout from '../components/Blog/Layout';
import Hero from '../components/start/Hero';
import { NextSeo } from 'next-seo';
import Possiblities from '../components/start/Possibilities';
import Tools from '../components/start/Tools';

function Home() {
  return (
    <Layout>
      <Head>
        <title>UN core</title>
      </Head>

      <Wrapper pageWidth="md">
        <NextSeo
          title="UN core"
          description="Digital Design System"
          openGraph={{
            url: process.env.NEXT_PUBLIC_DOMAIN,
            title: 'UN core',
            description: 'Digital Design System',
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_DOMAIN}/public/un-core-logo.png`,
                alt: 'Foto',
              },
            ],
            type: 'product',
            site_name: process.env.NEXT_PUBLIC_DOMAIN,
          }}
          facebook={{
            appId: '245187030507258',
          }}
        />
        <Hero />
        <Possiblities />
        <Tools />
      </Wrapper>
    </Layout>
  );
}

export default Home;
