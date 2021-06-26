import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>⚡️ Celeritas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
export default Layout;
