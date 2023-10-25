import React from "react";
import { Footer, Header } from "../../../components";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
