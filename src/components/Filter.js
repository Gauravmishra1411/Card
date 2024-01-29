import React from "react";
import './Filter.css';
// component ,filterData((old storage) is a props now there
export const Filter=({filterData})=>{
    return(
        <div className="filter">
          return{filterData.map((data)=>{
            <button>{data.title};</button>
          }) }  
        </div>
    )
}
// export default Filter;