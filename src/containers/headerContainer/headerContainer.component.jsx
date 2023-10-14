import React from "react";

import './headerContainer.css'
import { GROUP_BY, ORDER_BY } from "../../testing.constant";

export function HeaderContainer({ setGroupBy, setOrderBy }) {
  return (
    <div className="header-container">
      <div className="select-container">
        Grouping:
        <select className="select" onChange={(event) => setGroupBy(event.target.value)}>
          <option value={GROUP_BY.STATUS}>Status</option>
          <option value={GROUP_BY.USER} >User</option>
          <option value={GROUP_BY.PRIORITY} >Priority</option>
        </select>
      </div>
      <div className="select-container">
        Odering:
        <select className="select" onChange={(event) => setOrderBy(event.target.value)}>
          <option value={ORDER_BY.PRIORITY}>Priority</option>
          <option value={ORDER_BY.TITLE}>Title</option>
        </select>
      </div>
    </div>
  );
}
