import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SlidesFromMarkdown from "../controls/SlidesFromMarkdown";
import config from "../config";
const {
  Page_Introduction_to_Agoric,
  Page_Whats_New_in_Agoric,
  Page_Tutorial_1,
  Page_Tutorial_2,
  Page_Tutorial_3,
  Page_What_is_Zoe,
  Page_ERTP,
  Page_Agoric_CLI,
  Page_How_to_Build_a_Client_UI,
  Page_Permissioned_Deployments,
  Page_Testing,
  Page_Debugging,
  Page_API_Reference,
  Page_Lesson_1,
  Page_Lesson_2,
  Page_Lesson_3,
  Page_Lesson_4,
  Page_Lesson_5,
  Page_Lesson_6,
  Page_Lesson_7,
  Page_Lesson_8,
  Page_Lesson_9,
  Page_Lesson_10,
  Page_Lesson_11,
  Page_Lesson_12,
  Page_Lesson_13,
  Page_Lesson_14,
  Page_Lesson_15,
  Page_Lesson_16,
} = config;

const NavControl = () => {
  const [sideNavContent, setSideNavContent] = useState([]);
  const [markdownUrl, setMarkdownUrl] = useState("");
  const [sideNavSelectedItem, setSideNavSelectedItem] = useState(null); // State to track selected item in SideBar
  const [activeSelection, setActiveSelection] = useState("");

  const handleTopNavSelection = (selection) => {
    setActiveSelection(selection);
    switch (selection) {
      case "Home":
        setMarkdownUrl(Page_Introduction_to_Agoric);
        setSideNavContent(["Introduction to Agoric", "What's New in Agoric"]);
        setSideNavSelectedItem("Introduction to Agoric");
        break;

      case "Tutorial 1: Dapp-Offer-Up":
        setMarkdownUrl(Page_Tutorial_1);
        setSideNavContent(["Dapp Offer Up Tutorial", "Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"]);
        setSideNavSelectedItem("Dapp Offer Up Tutorial");
        break;
      case "Tutorial 2: Dapp-Agoric-Basics":
        setMarkdownUrl(Page_Tutorial_2);
        setSideNavContent(["Dapp Agoric Basics Tutorial", "Lesson 5", "Lesson 6", "Lesson 7", "Lesson 8", "Lesson 9", "Lesson 10", "Lesson 11", "Lesson 12"]);
        setSideNavSelectedItem("Dapp Agoric Basics Tutorial");
        break;
      case "Tutorial 3: Dapp-Orchestration":
        setMarkdownUrl(Page_Tutorial_3);
        setSideNavContent(["Dapp Orchestration Tutorial", "Lesson 13", "Lesson 14", "Lesson 15", "Lesson 16"]);
        setSideNavSelectedItem("Dapp Orchestration Tutorial");
        break;

      case "Core Concepts":
        setMarkdownUrl(Page_What_is_Zoe);
        setSideNavContent(["What is Zoe?", "ERTP", "Agoric CLI", "How to Build a Client UI", "Permissioned Deployments", "Testing", "Debugging"]);
        setSideNavSelectedItem("What is Zoe?");
        break;

      case "Resources":
        setMarkdownUrl(Page_API_Reference);
        setSideNavContent(["API Reference"]);
        setSideNavSelectedItem("API Reference");
        break;

      case "API Reference":
        setMarkdownUrl(Page_API_Reference);
        setSideNavContent(["API Reference"]);
        setSideNavSelectedItem("API Reference");
        break;

      case "Community & Support":
        setMarkdownUrl("");
        setSideNavContent(["Discord", "Office Hours", "X", "Github Discussions"]);
        setSideNavSelectedItem("Discord");
        break;

      default:
        setMarkdownUrl(Page_Introduction_to_Agoric);
        setSideNavContent(["Introduction to Agoric", "What's New in Agoric"]);
        setSideNavSelectedItem("Introduction to Agoric");
        break;
    }
  };

  const handleItemClick = (item) => {
    switch (item) {
      case "Introduction to Agoric":
        setMarkdownUrl(Page_Introduction_to_Agoric);
        setSideNavSelectedItem("Introduction to Agoric");
        break;
      case "What's New in Agoric":
        setMarkdownUrl(Page_Whats_New_in_Agoric);
        setSideNavSelectedItem("What's New in Agoric");
        break;

      case "Dapp Offer Up Tutorial":
        setMarkdownUrl(Page_Tutorial_1);
        setSideNavSelectedItem("Dapp Offer Up Tutorial");
        break;
      case "Lesson 1":
        setMarkdownUrl(Page_Lesson_1);
        setSideNavSelectedItem("Lesson 1");
        break;
      case "Lesson 2":
        setMarkdownUrl(Page_Lesson_2);
        setSideNavSelectedItem("Lesson 2");
        break;
      case "Lesson 3":
        setMarkdownUrl(Page_Lesson_3);
        setSideNavSelectedItem("Lesson 3");
        break;
      case "Lesson 4":
        setMarkdownUrl(Page_Lesson_4);
        setSideNavSelectedItem("Lesson 4");
        break;

      case "Dapp Agoric Basics Tutorial":
        setMarkdownUrl(Page_Tutorial_2);
        setSideNavSelectedItem("Dapp Agoric Basics Tutorial");
        break;
      case "Lesson 5":
        setMarkdownUrl(Page_Lesson_5);
        setSideNavSelectedItem("Lesson 5");
        break;
      case "Lesson 6":
        setMarkdownUrl(Page_Lesson_6);
        setSideNavSelectedItem("Lesson 6");
        break;
      case "Lesson 7":
        setMarkdownUrl(Page_Lesson_7);
        setSideNavSelectedItem("Lesson 7");
        break;
      case "Lesson 8":
        setMarkdownUrl(Page_Lesson_8);
        setSideNavSelectedItem("Lesson 8");
        break;
      case "Lesson 9":
        setMarkdownUrl(Page_Lesson_9);
        setSideNavSelectedItem("Lesson 9");
        break;
      case "Lesson 10":
        setMarkdownUrl(Page_Lesson_10);
        setSideNavSelectedItem("Lesson 10");
        break;
      case "Lesson 11":
        setMarkdownUrl(Page_Lesson_11);
        setSideNavSelectedItem("Lesson 11");
        break;
      case "Lesson 12":
        setMarkdownUrl(Page_Lesson_12);
        setSideNavSelectedItem("Lesson 12");
        break;

      case "Dapp Orchestration Tutorial":
        setMarkdownUrl(Page_Tutorial_3);
        setSideNavSelectedItem("Dapp Orchestration Tutorial");
        break;
      case "Lesson 13":
        setMarkdownUrl(Page_Lesson_13);
        setSideNavSelectedItem("Lesson 13");
        break;
      case "Lesson 14":
        setMarkdownUrl(Page_Lesson_14);
        setSideNavSelectedItem("Lesson 14");
        break;
      case "Lesson 15":
        setMarkdownUrl(Page_Lesson_15);
        setSideNavSelectedItem("Lesson 15");
        break;
      case "Lesson 16":
        setMarkdownUrl(Page_Lesson_16);
        setSideNavSelectedItem("Lesson 16");
        break;

      case "What is Zoe?":
        setMarkdownUrl(Page_What_is_Zoe);
        setSideNavSelectedItem("What is Zoe?");
        break;

      case "ERTP":
        setMarkdownUrl(Page_ERTP);
        setSideNavSelectedItem("ERTP");
        break;

      case "Agoric CLI":
        setMarkdownUrl(Page_Agoric_CLI);
        setSideNavSelectedItem("Agoric CLI");
        break;

      case "How to Build a Client UI":
        setMarkdownUrl(Page_How_to_Build_a_Client_UI);
        setSideNavSelectedItem("How to Build a Client UI");
        break;

      case "Permissioned Deployments":
        setMarkdownUrl(Page_Permissioned_Deployments);
        setSideNavSelectedItem("Permissioned Deployments");
        break;

      case "Testing":
        setMarkdownUrl(Page_Testing);
        setSideNavSelectedItem("Testing");
        break;

      case "Debugging":
        setMarkdownUrl(Page_Debugging);
        setSideNavSelectedItem("Debugging");
        break;

      case "API Reference":
        setMarkdownUrl(Page_API_Reference);
        setSideNavSelectedItem("API Reference");
        break;

      case "Discord":
        setMarkdownUrl("");
        setSideNavSelectedItem("Discord");
        break;
      case "Office Hours":
        setMarkdownUrl("");
        setSideNavSelectedItem("Office Hours");
        break;
      case "X":
        setMarkdownUrl("");
        setSideNavSelectedItem("X");
        break;
      case "Github Discussions":
        setMarkdownUrl("");
        setSideNavSelectedItem("Github Discussions");
        break;

      default:
        setMarkdownUrl("");
        break;
    }
    console.log("SideBar selection - " + item);
  };

  return (
    <div className="flex flex-col h-screen">
      <NavBar onSelectionChange={handleTopNavSelection} activeSelection={activeSelection} />
      <div className="flex flex-grow overflow-hidden">
        <SideBar content={sideNavContent} onItemClick={handleItemClick} selectedItem={sideNavSelectedItem} className="w-64 flex-none overflow-y-auto" />
        <div className="flex-grow p-4 overflow-y-auto">
          <SlidesFromMarkdown markdownUrl={markdownUrl} />
        </div>
      </div>
    </div>
  );
};

export default NavControl;
