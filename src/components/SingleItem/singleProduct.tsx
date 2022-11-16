import React, { useEffect } from "react";
import { useAppSelector } from "../../app/helper";
import { productsServiceAction } from "../../app/reducers/product/actions";
import { OneProductType } from "../../app/reducers/product/types";
import { dispatch, RootState } from "../../app/store";


const SingleItem: React.FC = () => {
    const OneProduct: OneProductType | null = useAppSelector(
      (state: RootState) => state.products.oneProduct
    );
    console.log(OneProduct)
    return (
        <div>
            Item
        </div>
    )
}

export default SingleItem
