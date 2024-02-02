import React, { useState } from "react";
import SlidesFromMarkdown from "../controls/SlidesFromMarkdown";
import "../App.css";
import logo from "../assets/logo.svg";
//import banner from "../assets/banner.png";

const TestPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="container mb-4 flex justify-between items-center">
        <img src={logo} alt="Logo" />
        { /* 
        <div className="flex-1 text-center">
          <img src={banner} alt="Banner" className="mx-auto w-[400px]" />
        </div>
        */}
      </div>

      <div className="flex bg-gray-200" style={{ borderRadius: '8px' }}>
        <button className={`flex-1 py-2 px-4 border-b-2 ${activeTab === 1 ? "border-blue-500 text-blue-500 bg-blue-100" : "border-gray-300 text-gray-500"} focus:outline-none`} onClick={() => handleTabClick(1)}>Getting Started</button>
        <button className={`flex-1 py-2 px-4 border-b-2 ${activeTab === 2 ? "border-blue-500 text-blue-500 bg-blue-100" : "border-gray-300 text-gray-500"} focus:outline-none`} onClick={() => handleTabClick(2)}>Smart Wallet Dapp Architecture</button>
        <button className={`flex-1 py-2 px-4 border-b-2 ${activeTab === 3 ? "border-blue-500 text-blue-500 bg-blue-100" : "border-gray-300 text-gray-500"} focus:outline-none`} onClick={() => handleTabClick(3)}>Deploying Smart Contracts</button>
      </div>

      <div className="tab-content mt-4">
        {activeTab === 1 && <SlidesFromMarkdown markdownUrl="https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/README.md" />}
        {activeTab === 2 && <SlidesFromMarkdown markdownUrl="https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/contract-rpc.md" />}
        {activeTab === 3 && <SlidesFromMarkdown markdownUrl="https://raw.githubusercontent.com/Agoric/documentation/main/main/guides/getting-started/deploying.md" />}
      </div>
    </div>
  );
};

export default TestPage;