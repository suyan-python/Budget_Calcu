import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="items">
        <div className="item">Budget Calculation</div>
        <div className="item">Expense Calculation</div>
        <div className="item">Stocks Calculation</div>
      </div>
    </div>
  );
}

export default NavBar;
