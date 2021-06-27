import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Celeritas</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="flex flex-col h-screen justify-between">
        <Navbar />

        <main className="">{children}</main>

        <Footer />
      </div>
    </div>
  );
};
export default Layout;
