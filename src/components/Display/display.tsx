import { useEffect } from "react";
import { useAppSelector } from "../../app/helper";
import { productsServiceAction } from "../../app/reducers/product/actions";
import { selectProductsList } from "../../app/reducers/product/selectors";
import { dispatch } from "../../app/store";
import FavoriteItem from "./OneFavoriteItem";

const Display = () => {
    const data = useAppSelector(selectProductsList);
    console.log(data)
    const products = data.map(item => item.liked&&<FavoriteItem id={item.id} price={item.price} name={item.name} src={item.src} liked={false} />)
    return (
        <div className="display">
            <p>FAVORITIES</p>
            {products}
        </div>
    )
}

export default Display
