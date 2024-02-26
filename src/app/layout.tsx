"use client"
import React from 'react';
import "./globals.css";
import { MovieLayout } from '@/components/layout';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@200;400;600&display=swap"
          rel="stylesheet"
          />
        <link
          href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
          rel="stylesheet"
        />
        <meta property="og:locale" content="en_US" />
      </head>
      <body
        style={{
          margin: '0 auto',
          maxWidth: '1440px'
        }}
      >
         <MovieLayout title='MovieApp - Home'  pageDescription='Encuentra las mejores películas actuales aqui'>
           <Providers>
             {children}
           </Providers>
         </MovieLayout>
      </body>
    </html>
  );
}