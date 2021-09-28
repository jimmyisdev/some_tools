import React from 'react'
import {  NavLink } from "react-router-dom";


export default function Nav() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" activeClassName="alert" className="nav_item" exact>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/straight_text"
              className="nav_item"
              activeClassName="alert"
            >
              拉直
            </NavLink>
          </li>
          <li>
            <NavLink to="/clocks" className="nav_item" activeClassName="alert">
              時鐘
            </NavLink>
          </li>
          <li>
            <NavLink to="/exchange" className="nav_item" activeClassName="alert">
              匯率
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}
