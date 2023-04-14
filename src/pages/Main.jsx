import React from "react";
import MainModule from "../components/MainModule";
import Navbar from "../components/Navbar";

const Main = ({ clickSign, setClickSign }) => {
  return (
    <div>
      <Navbar clickSign={clickSign} setClickSign={setClickSign} />
      <MainModule />
    </div>
  );
};

export default Main;
