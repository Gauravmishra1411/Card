import React from "react";
import "./Image.css";
 export const image =({dataItem})=>{
    let alldata=[];
    // return you a list of all dataItem received from the api respose
 const getCourses=()=>{
    Object.values(dataItem).forEach((newdata)=>{
        newdata.forEach((dataItem)=>{
            alldata.push(dataItem);
        })
    })
    return alldata;
 }

    return(
        <div className="image_tag">
             {
getCourses.map((dataItem) =>{
return<Card dataItem={dataItem}/>
})  
             }
           
           
            
        </div>
    )
}
// export default image;