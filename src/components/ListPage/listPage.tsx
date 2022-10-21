import { OneProductType, ProductsEnums } from "../../app/reducers/product/types";
import {productsServiceAction} from "../../app/reducers/product/actions";
import {
  selectProductsList,
} from "../../app/reducers/product/selectors";
import { useAppSelector } from "../../app/helper";
import { useEffect } from "react";
import { dispatch } from "../../app/store";
import OneItem from "./OneItem";

const ListPage = () => {
    const data = useAppSelector(selectProductsList);
    console.log(data)
    const products = data.map(item => !item.liked&&<OneItem id={item.id} name={item.name} src={item.src} price={item.price} liked={false}/>)
    useEffect(() => {
        dispatch(productsServiceAction.getAllproductsAction());
      }, []);
    return (
        <div className="listPage">
            {products}
        </div>
    )
}

export default ListPage
