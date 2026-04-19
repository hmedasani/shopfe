import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
    </>
  );
}