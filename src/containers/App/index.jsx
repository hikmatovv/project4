/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";

import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import R from "../../components/Acount/index";
import ReservationForm from "../../components/reservetion_form/index";
// import Edit from "../../components/Home/index";

// import Adash from "../../components/Muhammadrasul/Page1/index";

export default () => {
  const content = useRoutes(routes);
  return (
    <>
      <Navbar />
      {/* <ReservationForm /> */}
      {/* <R /> */}
      {/* <Edit /> */}
      {/* <Adash /> */}
      {content}
      <Footer />
    </>
  );
};
