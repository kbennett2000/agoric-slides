import React, { useState } from "react";
import "../App.css";
import NavControl from "../navigation/NavControl";

const HomePage = () => {
  return (
    <div className="mx-auto mt-8">
      <div className="mb-4 flex justify-left items-center">
        <NavControl />
      </div>
    </div>
  );

};

export default HomePage;
