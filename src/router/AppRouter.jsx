import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Cars from "../pages/Cars";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Reservation from "../pages/Reservation";
import PrivateRouter from "./PrivateRouter";
import MyReservations from "../pages/MyReservations";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/reservation/:id" element={<PrivateRouter />}>
          <Route path="" element={<Reservation />} />
        </Route>
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
