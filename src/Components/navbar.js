import React from "react";
import Header from "./header";
import "./style.css";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="navbar ">
        {menuList.map((curElem) => {
          return (
            <button className="btn" onClick={() => filterItem(curElem)}>
              {curElem}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
