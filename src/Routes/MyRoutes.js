import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Authentication/Login";
import Home from "../Components/Home/Home";
import ViewAppointment from "../Components/View_Appointment/ViewAppointment";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/view" element={<ViewAppointment />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
