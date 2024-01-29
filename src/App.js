// import React from "react";
// import ReactDOM from "react-dom/client";
// import top from "./top";
// import filter from "./filter";

// const AppLayout = () => {
//   return (
//     <>
//        <top/>
//        <filter/>
//     </>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
// export default App;


// import React from "react";
// import ReactDOM from "react-dom";
// import Top from "./top";
// import Filter from "./filter";

// const AppLayout = () => {
//   return (
//     <>
//        <Top />
//        <Filter />
//     </>
//   );
// };

// ReactDOM.render(<AppLayout />, document.getElementById("root"));
import React from "react";
import  {  useState } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import Top from "./components/top";
import {Image} from "./components/image";
import {Filter} from "./components/filter";
import { filterData,apiUrl } from "./Data";
import { Toast } from "react-toastify/dist/components";

const AppLayout = () => {
  const [dataItem,setdataItem]=useState("");
  useEffect (()=>{
    const fetchData=async()=>{
      try{
        // calling apiurl ko
        const res=await fetch(apiUrl);
        // data formater
        const output=await res.json();
        // tosave 
        setdataItem(output.data);
        // data save variable is dataItem
      }
      catch(error){
        Toast.error("Something went to wrong");
      }
    }
  },[]);

  return (
    <>
       <Top />
       <Filter 
      //  props
       filterData={filterData}/>
       <Image 
       dataItem={dataItem}/>
    </>
  );
};

export default AppLayout;

ReactDOM.render(<AppLayout />, document.getElementById("root"));

