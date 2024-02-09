import React from "react";
import { Navbar } from "react-bootstrap"; // Assuming Nav.Link is no longer used

const SideBar = ({ content, onItemClick, selectedItem }) => {
  return (
    <Navbar bg="light" expand="lg" className="flex-col h-screen">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <div className="flex flex-col">
        {content.map((item, index) => (
          <div
            key={index}
            onClick={() => onItemClick(item)} // Use the onItemClick handler from props
            className={`cursor-pointer px-4 py-2 mt-2 text-sm font-semibold rounded-lg ${selectedItem === item ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-500 hover:text-white"}`}
          >
            {item}
          </div>
        ))}
      </div>
    </Navbar>
  );
};

export default SideBar;
