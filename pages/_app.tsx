import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import Layout from "../components/Layout";
import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
