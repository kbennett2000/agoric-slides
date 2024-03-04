import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SlidesFromMarkdown from "../controls/SlidesFromMarkdown";
import config from "../config";
const {
  Page_Introduction,
  Page_Beginner,
  Page_Advanced,
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
  Page_Discord,
  Page_Office_Hours,
  Page_X,
  Page_What_is_Agoric, 
  Page_Smart_Wallet_Dapp_Architecture, 
  Page_Signing_and_Broadcasting_Offers, 
  Page_Querying_VStorage, 
  Page_Specifying_Offers, 
  Page_Smart_Wallet_VStorage_Topics, 
  Page_VBank_Assets_and_Cosmos_Bank_Balances, 
  Page_Deploying_Smart_Contracts, 
  Page_Smart_Contract_Basics, 
  Page_Zoe_Overview, 
  Page_Why_Use_Zoe, 
  Page_Building_a_Contract, 
  Page_Contract_Installation, 
  Page_Starting_a_Contract_Instance, 
  Page_Trading_with_Offer_Safety, 
  Page_Contract_Upgrade, 
  Page_JavaScript_Framework, 
  Page_Wallet, 
  Page_Wallet_and_Agoric_Architecture, 
  Page_Wallet_Bridge_Protocol, 
  Page_Petnames_and_Paths, 
  Page_The_Agoric_Board, 
  Page_Wallet_UI, 
  Page_ERTP_Overview, 
  Page_ERTP_Concepts_Overview, 
  Page_Method_Naming_Structure, 
  Page_Life_of_Assets, 
  Page_Creating_and_Using_Non_Fungible_Assets, 
  Page_Amounts_Are_Not_Assets, 
  Page_Object_Capabilities_and_ERTP, 
  Page_Security_Properties, 
  Page_Promises, 
  Page_Amounts_Values_and_Brands, 
  Page_AmountMath, 
  Page_Issuers_and_Mints, 
  Page_Purses_and_Payments, 
  Page_Agoric_Platform, 
  Page_SwingSet, 
  Page_Cosmos_SDK, 
  Page_Dynamic_IBC, 
  Page_Tendermint, 
} = config;

const NavControl = () => {
  const [sideNavContent, setSideNavContent] = useState([
    {
      name: "Introduction",
      subItems: [
        "What is Agoric?",
        "Smart Wallet Dapp Architecture",
        "- Signing and Broadcasting Offers",
        "- Querying VStorage",
        "- Specifying Offers",
        "- Smart Wallet VStorage Topics",
        "- VBank Assets and Cosmos Bank Balances",
        "- Deploying Smart Contracts",
        "What is Zoe?",
        "- Smart Contract Basics",
        "- Zoe Overview",
        "- What is Zoe?",
        "- Why Use Zoe?",
        "- Building a Contract",
        "- Contract Installation",
        "- Starting a Contract Instance",
        "- Trading with Offer Safety",
        "- Contract Upgrade",
      ],
    },
    {
      name: "Beginner",
      subItems: [
        "JavaScript Framework",
        "Wallet",
        "- Wallet and Agoric Architecture",
        "- Wallet Bridge Protocol",
        "- Petnames and Paths",
        "- The Agoric Board",
        "- Wallet UI",
        "ERTP",
        "- ERTP Overview",
        "- ERTP Concepts Overview",
        "- Method Naming Structure",
        "- Life of Assets",
        "- Creating and Using Non-Fungible Assets",
        "- Amounts Are Not Assets",
        "- Object Capabilities and ERTP",
        "- Security Properties",
        "- Promises",
        "- Amounts, Values, and Brands",
        "- AmountMath",
        "- Issuers and Mints",
        "- Purses and Payments",
      ],
    },
    { name: "Advanced", subItems: ["Agoric Platform", "- SwingSet", "- Cosmos SDK", "- Dynamic IBC", "- Tendermint"] },
  ]);
  const [markdownUrl, setMarkdownUrl] = useState(Page_Introduction);
  const [sideNavSelectedItem, setSideNavSelectedItem] = useState("Introduction");
  const [activeSelection, setActiveSelection] = useState("Learn");

  const handleTopNavSelection = (selection) => {
    setActiveSelection(selection);
    switch (selection) {
      case "Learn":
        setMarkdownUrl(Page_Introduction);
        setSideNavContent([
          {
            name: "Introduction",
            subItems: [
              "What is Agoric?",
              "Smart Wallet Dapp Architecture",
              "- Signing and Broadcasting Offers",
              "- Querying VStorage",
              "- Specifying Offers",
              "- Smart Wallet VStorage Topics",
              "- VBank Assets and Cosmos Bank Balances",
              "- Deploying Smart Contracts",
              "What is Zoe?",
              "- Smart Contract Basics",
              "- Zoe Overview",
              "- What is Zoe?",
              "- Why Use Zoe?",
              "- Building a Contract",
              "- Contract Installation",
              "- Starting a Contract Instance",
              "- Trading with Offer Safety",
              "- Contract Upgrade",
            ],
          },
          {
            name: "Beginner",
            subItems: [
              "JavaScript Framework",
              "Wallet",
              "- Wallet and Agoric Architecture",
              "- Wallet Bridge Protocol",
              "- Petnames and Paths",
              "- The Agoric Board",
              "- Wallet UI",
              "ERTP",
              "- ERTP Overview",
              "- ERTP Concepts Overview",
              "- Method Naming Structure",
              "- Life of Assets",
              "- Creating and Using Non-Fungible Assets",
              "- Amounts Are Not Assets",
              "- Object Capabilities and ERTP",
              "- Security Properties",
              "- Promises",
              "- Amounts, Values, and Brands",
              "- AmountMath",
              "- Issuers and Mints",
              "- Purses and Payments",
            ],
          },
          { name: "Advanced", subItems: ["Agoric Platform", "- SwingSet", "- Cosmos SDK", "- Dynamic IBC", "- Tendermint"] },
        ]);
        setSideNavSelectedItem("Introduction");
        break;

      case "Tutorial 1: Dapp-Offer-Up":
        setMarkdownUrl(Page_Tutorial_1);
        setSideNavContent([{ name: "Dapp Offer Up Tutorial", subItems: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"] }]);
        setSideNavSelectedItem("Dapp Offer Up Tutorial");
        break;
        
      case "Tutorial 2: Dapp-Agoric-Basics":
        setMarkdownUrl(Page_Tutorial_2);
        setSideNavContent([{ name: "Dapp Agoric Basics Tutorial", subItems: ["Lesson 5", "Lesson 6", "Lesson 7", "Lesson 8", "Lesson 9", "Lesson 10", "Lesson 11", "Lesson 12"] }]);
        setSideNavSelectedItem("Dapp Agoric Basics Tutorial");
        break;

      case "Tutorial 3: Dapp-Orchestration":
        setMarkdownUrl(Page_Tutorial_3);
        setSideNavContent([{ name: "Dapp Orchestration Tutorial", subItems: ["Lesson 13", "Lesson 14", "Lesson 15", "Lesson 16"] }]);
        setSideNavSelectedItem("Dapp Orchestration Tutorial");
        break;

      case "Build":
        setMarkdownUrl(Page_How_to_Build_a_Client_UI);
        setSideNavContent([
          { name: "How to Build a Client UI", subItems: [] },
          { name: "Permissioned Deployments", subItems: [] },
          { name: "Testing", subItems: [] },
          { name: "Debugging", subItems: [] },
          { name: "Agoric CLI", subItems: [] },
          { name: "API Reference", subItems: [] },
        ]);
        setSideNavSelectedItem("How to Build a Client UI");
        break;

      case "Office Hours":
        window.open(Page_Office_Hours, "_blank");
        break;

      case "Discord":
        window.open(Page_Discord, "_blank");
        break;

      case "X":
        window.open(Page_X, "_blank");
        break;

      default:
        setMarkdownUrl(Page_Introduction);

        setSideNavContent([
          {
            name: "Introduction",
            subItems: [
              "What is Agoric?",
              "Smart Wallet Dapp Architecture",
              "- Signing and Broadcasting Offers",
              "- Querying VStorage",
              "- Specifying Offers",
              "- Smart Wallet VStorage Topics",
              "- VBank Assets and Cosmos Bank Balances",
              "- Deploying Smart Contracts",
              "What is Zoe?",
              "- Smart Contract Basics",
              "- Zoe Overview",
              "- What is Zoe?",
              "- Why Use Zoe?",
              "- Building a Contract",
              "- Contract Installation",
              "- Starting a Contract Instance",
              "- Trading with Offer Safety",
              "- Contract Upgrade",
            ],
          },
          {
            name: "Beginner",
            subItems: [
              "JavaScript Framework",
              "Wallet",
              "- Wallet and Agoric Architecture",
              "- Wallet Bridge Protocol",
              "- Petnames and Paths",
              "- The Agoric Board",
              "- Wallet UI",
              "ERTP",
              "- ERTP Overview",
              "- ERTP Concepts Overview",
              "- Method Naming Structure",
              "- Life of Assets",
              "- Creating and Using Non-Fungible Assets",
              "- Amounts Are Not Assets",
              "- Object Capabilities and ERTP",
              "- Security Properties",
              "- Promises",
              "- Amounts, Values, and Brands",
              "- AmountMath",
              "- Issuers and Mints",
              "- Purses and Payments",
            ],
          },
          { name: "Advanced", subItems: ["Agoric Platform", "- SwingSet", "- Cosmos SDK", "- Dynamic IBC", "- Tendermint"] },
        ]);

        setSideNavSelectedItem("Introduction");
        break;
    }
  };

  const handleItemClick = (item) => {
    let selectedNavItem = "";

    if (typeof item === "string") {
      selectedNavItem = removeDashPrefix(item);
    } else if (typeof item === "object" && item !== null) {
      selectedNavItem = removeDashPrefix(item.name);
    }

    switch (selectedNavItem) {
      case "What's New in Agoric":
        setMarkdownUrl(Page_Whats_New_in_Agoric);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 1":
        setMarkdownUrl(Page_Lesson_1);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 2":
        setMarkdownUrl(Page_Lesson_2);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 3":
        setMarkdownUrl(Page_Lesson_3);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 4":
        setMarkdownUrl(Page_Lesson_4);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 5":
        setMarkdownUrl(Page_Lesson_5);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 6":
        setMarkdownUrl(Page_Lesson_6);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 7":
        setMarkdownUrl(Page_Lesson_7);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 8":
        setMarkdownUrl(Page_Lesson_8);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 9":
        setMarkdownUrl(Page_Lesson_9);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 10":
        setMarkdownUrl(Page_Lesson_10);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 11":
        setMarkdownUrl(Page_Lesson_11);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 12":
        setMarkdownUrl(Page_Lesson_12);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 13":
        setMarkdownUrl(Page_Lesson_13);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 14":
        setMarkdownUrl(Page_Lesson_14);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 15":
        setMarkdownUrl(Page_Lesson_15);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Lesson 16":
        setMarkdownUrl(Page_Lesson_16);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Discord":
        setMarkdownUrl("");
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Office Hours":
        setMarkdownUrl("");
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "X":
        setMarkdownUrl("");
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Github Discussions":
        setMarkdownUrl("");
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Dapp Offer Up Tutorial":
        setMarkdownUrl(Page_Tutorial_1);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Dapp Agoric Basics Tutorial":
        setMarkdownUrl(Page_Tutorial_2);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Dapp Orchestration Tutorial":
        setMarkdownUrl(Page_Tutorial_3);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Introduction":
        setMarkdownUrl(Page_Introduction);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Beginner":
        setMarkdownUrl(Page_Beginner);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Advanced":
        setMarkdownUrl(Page_Advanced);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "What is Zoe?":
        setMarkdownUrl(Page_What_is_Zoe);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "ERTP":
        setMarkdownUrl(Page_ERTP);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Agoric CLI":
        setMarkdownUrl(Page_Agoric_CLI);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "How to Build a Client UI":
        setMarkdownUrl(Page_How_to_Build_a_Client_UI);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Permissioned Deployments":
        setMarkdownUrl(Page_Permissioned_Deployments);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Testing":
        setMarkdownUrl(Page_Testing);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Debugging":
        setMarkdownUrl(Page_Debugging);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "API Reference":
        setMarkdownUrl(Page_API_Reference);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "What is Agoric?":
        setMarkdownUrl(Page_What_is_Agoric);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Smart Wallet Dapp Architecture":
        setMarkdownUrl(Page_Smart_Wallet_Dapp_Architecture);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Signing and Broadcasting Offers":
        setMarkdownUrl(Page_Signing_and_Broadcasting_Offers);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Querying VStorage":
        setMarkdownUrl(Page_Querying_VStorage);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Specifying Offers":
        setMarkdownUrl(Page_Specifying_Offers);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Smart Wallet VStorage Topics":
        setMarkdownUrl(Page_Smart_Wallet_VStorage_Topics);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "VBank Assets and Cosmos Bank Balances":
        setMarkdownUrl(Page_VBank_Assets_and_Cosmos_Bank_Balances);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Deploying Smart Contracts":
        setMarkdownUrl(Page_Deploying_Smart_Contracts);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "What is Zoe?":
        setMarkdownUrl(Page_What_is_Zoe);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Smart Contract Basics":
        setMarkdownUrl(Page_Smart_Contract_Basics);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Zoe Overview":
        setMarkdownUrl(Page_Zoe_Overview);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Why Use Zoe?":
        setMarkdownUrl(Page_Why_Use_Zoe);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Building a Contract":
        setMarkdownUrl(Page_Building_a_Contract);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Contract Installation":
        setMarkdownUrl(Page_Contract_Installation);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Starting a Contract Instance":
        setMarkdownUrl(Page_Starting_a_Contract_Instance);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Trading with Offer Safety":
        setMarkdownUrl(Page_Trading_with_Offer_Safety);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Contract Upgrade":
        setMarkdownUrl(Page_Contract_Upgrade);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "JavaScript Framework":
        setMarkdownUrl(Page_JavaScript_Framework);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Wallet":
        setMarkdownUrl(Page_Wallet);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Wallet and Agoric Architecture":
        setMarkdownUrl(Page_Wallet_and_Agoric_Architecture);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Wallet Bridge Protocol":
        setMarkdownUrl(Page_Wallet_Bridge_Protocol);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Petnames and Paths":
        setMarkdownUrl(Page_Petnames_and_Paths);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "The Agoric Board":
        setMarkdownUrl(Page_The_Agoric_Board);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Wallet UI":
        setMarkdownUrl(Page_Wallet_UI);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "ERTP":
        setMarkdownUrl(Page_ERTP);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "ERTP Overview":
        setMarkdownUrl(Page_ERTP_Overview);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "ERTP Concepts Overview":
        setMarkdownUrl(Page_ERTP_Concepts_Overview);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Method Naming Structure":
        setMarkdownUrl(Page_Method_Naming_Structure);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Life of Assets":
        setMarkdownUrl(Page_Life_of_Assets);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Creating and Using Non-Fungible Assets":
        setMarkdownUrl(Page_Creating_and_Using_Non_Fungible_Assets);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Amounts Are Not Assets":
        setMarkdownUrl(Page_Amounts_Are_Not_Assets);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Object Capabilities and ERTP":
        setMarkdownUrl(Page_Object_Capabilities_and_ERTP);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Security Properties":
        setMarkdownUrl(Page_Security_Properties);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Promises":
        setMarkdownUrl(Page_Promises);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Amounts, Values, and Brands":
        setMarkdownUrl(Page_Amounts_Values_and_Brands);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "AmountMath":
        setMarkdownUrl(Page_AmountMath);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Issuers and Mints":
        setMarkdownUrl(Page_Issuers_and_Mints);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Purses and Payments":
        setMarkdownUrl(Page_Purses_and_Payments);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Agoric Platform":
        setMarkdownUrl(Page_Agoric_Platform);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "SwingSet":
        setMarkdownUrl(Page_SwingSet);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Cosmos SDK":
        setMarkdownUrl(Page_Cosmos_SDK);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Dynamic IBC":
        setMarkdownUrl(Page_Dynamic_IBC);
        setSideNavSelectedItem(selectedNavItem);
        break;

      case "Tendermint":
        setMarkdownUrl(Page_Tendermint);
        setSideNavSelectedItem(selectedNavItem);
        break;

      default:
        setMarkdownUrl("");
        break;
    }
  };

  function removeDashPrefix(str) {
    if (str.startsWith("- ")) {
      return str.slice(2);
    }
    return str;
  }

  return (
    <div className="flex flex-col h-screen">
      <NavBar onSelectionChange={handleTopNavSelection} activeSelection={activeSelection} />
      <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
        <SideBar content={sideNavContent} onItemClick={handleItemClick} selectedItem={sideNavSelectedItem} className="w-64 flex-none overflow-y-auto" />
        <div className="flex-grow p-4 overflow-y-auto">
          <SlidesFromMarkdown markdownUrl={markdownUrl} />
        </div>
      </div>
    </div>
  );
};

export default NavControl;
