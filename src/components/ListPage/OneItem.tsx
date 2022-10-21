import likeIcon from "../../Vector.png"
import React from "react";
import {productsServiceAction} from "../../app/reducers/product/actions";
import { dispatch } from "../../app/store";
import { OneProductType } from "../../app/reducers/product/types";

const OneItem: React.FC<OneProductType> = ({id, name, liked, price, src}) => {
    const like = () => {
        dispatch(productsServiceAction.likeOneProductAction(id));
    };

    const handleDoubleClick = () => {
        dispatch(productsServiceAction.getOneProductsAction(id || null))
    };

    return (
        <div className="oneItem" onDoubleClick={handleDoubleClick}>
            <img src={`https://testbackend.nc-one.com${src}`}/>
            <div className="info-wrapper">
                <div>
                    {name}
                </div>
                <div className="price">
                    <div>
                        ${price}
                    </div>
                    <img onClick={like} src={likeIcon}/>
                </div>
            </div>
        </div>
    )
}

export default OneItem
