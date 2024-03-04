import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

const SideBar = ({ content, onItemClick }) => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleItemClick = (item) => {
    if (item.subItems && item.subItems.length > 0) {
      setVisibleDropdown(visibleDropdown === item ? null : item);
      onItemClick(item);
    } else {
      onItemClick(item);
      setVisibleDropdown(null); // Close dropdowns when a regular item is clicked
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="flex-col h-screen">
      <Navbar.Brand href="#home"></Navbar.Brand>
      <div className="flex flex-col">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div onClick={() => handleItemClick(item)} className={`cursor-pointer px-4 py-2 mt-2 text-sm font-semibold rounded-lg flex items-center ${visibleDropdown === item ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-500 hover:text-white"}`}>
              {item.subItems && item.subItems.length > 0 && (
                <span className="text-lg mr-2">
                  {visibleDropdown === item ? '-' : '+'} {/* Change this to your icon */}
                </span>
              )}
              <span>{item.name}</span>
            </div>
            {visibleDropdown === item && item.subItems && (
              <div className="pl-4">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} onClick={() => onItemClick(subItem)} className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold rounded-lg text-gray-700 hover:bg-blue-500 hover:text-white">
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Navbar>
  );
};

export default SideBar;
