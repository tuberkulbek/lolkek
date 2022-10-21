import likeIcon from "../../Vector.png"
import React from "react";
import { OneProductType } from "../../app/reducers/product/types";

const FavoriteItem: React.FC<OneProductType> = (data) => {
    return (
        <div className="favItem">
            <img className="favIcon" src={`https://testbackend.nc-one.com${data.src}`}/>
            <div className="favItemInfo">
                <div>
                    {data.name}
                </div>
                <div className="favItemPrice">
                    <div>
                        ${data.price}
                    </div>
                    <img onClick={()=>console.log("sfbs")} src={likeIcon}/>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem