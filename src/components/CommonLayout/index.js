import React from "react";
import ClientItems from "../ClientItems";
import Header from "../Header";
import Footer from "../Footer";

const CommonLayout = ({ children }) => {
  return (
    <ClientItems>
      <Header />
      {children}
      <Footer />
    </ClientItems>
  );
};

export default CommonLayout;
