import React from "react";
import {FcLike} from "react-icons/fc";
const Card =({dataItem})=>{
    return(
     <div>
        <div>
            <img src="dataItem.image.url" alt=""></img>
            <div>
                {/* npm i react-icon */}
                <button>
<FcLike           fontSize="1.5rem"/>
                </button>
            </div>
        </div>
        <div>
            <p>{dataItem.title}</p>
            <p>{dataItem.disc}</p>
        </div>
    </div>
    )
}

export default Card;