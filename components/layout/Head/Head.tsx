import React from 'react';
import NextHead from 'next/head';

export function Head() {
  return (
    <NextHead>
      <title>Guillaume Fay - Freelance Sofware engineer</title>
      <meta
        name="description"
        content="Guillaume Fay - Freelance Sofware engineer - Full stack developper"
      />
      {/* eslint-disable @next/next/no-page-custom-font */}
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=optional"
      /> */}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
