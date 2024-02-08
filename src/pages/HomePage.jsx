import React, { useState } from "react";
import "../App.css";
import NavControl from "../navigation/NavControl";

const TestPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="container mb-4 flex justify-left items-center">
        <NavControl />
      </div>
    </div>
  );
};

export default TestPage;
