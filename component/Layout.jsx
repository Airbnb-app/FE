import React from "react";
import Container from "./Container";
import Sidebar from "./Sidebar";
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
          <title>Airbnb</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logo-4.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
        </Head>
      <Sidebar />
      <div className="flex flex-col w-full h-full m-5 ">
        {children}
      </div>
    </Container>
  );
};

export default Layout;
