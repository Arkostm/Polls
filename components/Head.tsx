import React from 'react';
import NextHead from 'next/head';

export const Head = () => {
  return (
    <NextHead>
      <title>Henry's Polls</title>
      <meta name='description' content='Polls project, all thanks to henry' />
      <link rel='icon' href='/favicon.ico' />
    </NextHead>
  );
};
