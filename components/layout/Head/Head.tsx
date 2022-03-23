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
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      /> */}
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
