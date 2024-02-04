import React from "react";
import { todoFilter } from "../../utilities/constants";

export function TodoFilter ({selectedFilter, applyFilter})  {
  return (
  <div className="filter-list">
    {
      todoFilter.map((itm,index) => (
        <p 
          key={index} 
          className={selectedFilter === itm ? "filter-selected" : ""}
          onClick={() => applyFilter(itm)}>{itm}</p>
      ))
    }
  </div>)
}