import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.svg";

function NavBar({ onSelectionChange, activeSelection }) {
    const getNavItemClasses = (itemName) => {
        return `px-3 py-2 rounded-md text-sm font-medium ${activeSelection === itemName ? "bg-blue-500 text-white !important" : "text-gray-700 hover:bg-blue-500 hover:text-white"}`;
      };

  return (
    <>
      <Navbar bg="light" expand="lg" className="bg-white">
        <img src={logo} alt="Logo" width="150" />
        <Navbar.Brand href="#home" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Directly apply Tailwind CSS classes using the utility function */}
            <Nav.Link onClick={() => onSelectionChange("Learn")}><div className={getNavItemClasses("Learn")}>Learn</div></Nav.Link>
            <Nav.Link className={getNavItemClasses("Build")} onClick={() => onSelectionChange("Build")}><div className={getNavItemClasses("Build")}>Build</div></Nav.Link>
            {/* For NavDropdown, you might need additional customization for active state styling */}
            <NavDropdown title="Tutorials" id="home-tutorials" className={getNavItemClasses("Tutorials")}>
              <NavDropdown.Item className={getNavItemClasses("Tutorial 1: Dapp-Offer-Up")} onClick={() => onSelectionChange("Tutorial 1: Dapp-Offer-Up")}><div className={getNavItemClasses("Tutorial 1: Dapp-Offer-Up")}>Tutorial 1: Dapp-Offer-Up</div></NavDropdown.Item>
              <NavDropdown.Item className={getNavItemClasses("Tutorial 2: Dapp-Agoric-Basics")} onClick={() => onSelectionChange("Tutorial 2: Dapp-Agoric-Basics")}><div className={getNavItemClasses("Tutorial 2: Dapp-Agoric-Basics")}>Tutorial 2: Dapp-Agoric-Basics</div></NavDropdown.Item>
              <NavDropdown.Item className={getNavItemClasses("Tutorial 3: Dapp-Orchestration")} onClick={() => onSelectionChange("Tutorial 3: Dapp-Orchestration")}><div className={getNavItemClasses("Tutorial 3: Dapp-Orchestration")}>Tutorial 3: Dapp-Orchestration</div></NavDropdown.Item>
            </NavDropdown>

            {/* For NavDropdown, you might need additional customization for active state styling */}
            <NavDropdown title="Support" id="home-support" className={getNavItemClasses("Support")}>
              <NavDropdown.Item className={getNavItemClasses("Office Hours")} onClick={() => onSelectionChange("Office Hours")}><div className={getNavItemClasses("Office Hours")}>Office Hours</div></NavDropdown.Item>
              <NavDropdown.Item className={getNavItemClasses("Discord")} onClick={() => onSelectionChange("Discord")}><div className={getNavItemClasses("Discord")}>Discord</div></NavDropdown.Item>
              <NavDropdown.Item className={getNavItemClasses("X")} onClick={() => onSelectionChange("X")}><div className={getNavItemClasses("X")}>X</div></NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
