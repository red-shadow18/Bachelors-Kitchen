import React, { useState } from "react";
import "./style.css";
import Menu from "./menu.js";
import Itemcard from "./itemCard.js";
import Header from "./header.js";
import Navbar from "./navbar.js";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  console.log(menuData);

  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Header />
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Itemcard menuData={menuData} />
    </>
  );
};

export default Resturant;
