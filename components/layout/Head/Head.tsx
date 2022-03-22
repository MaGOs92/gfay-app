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
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
