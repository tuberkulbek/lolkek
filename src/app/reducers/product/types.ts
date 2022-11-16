export type OneProductType = {
    id: number | null;
    price: number | null;
    name: string;
    src: string;
    liked: boolean;
}

export interface ProductsInitials {
    allProducts: OneProductType[];
    oneProduct: OneProductType | null;
  }

export enum ProductsEnums {
    getAllProducts = "product/get/all",
    getOneProduct = "product/get/one",
    likeOneProduct = "product/like/one"
}