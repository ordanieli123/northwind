import axios, { AxiosRequestConfig } from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { productActions, store } from "../Redux/store";

class ProductService {

	public async getAllProducts() {

        if(store.getState().products.length>0) return store.getState().products;
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        const action = productActions.initProducts(products);
        store.dispatch(action);
        return products; // Returns Promise<ProductModel[]>
    }

    public async getOneProduct(id: number) {
        const desiredProduct=store.getState().products.find(p=>p.id===id);
        if(desiredProduct) return desiredProduct;
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const product = response.data;
        return product;
    }

    public async addProduct(product:ProductModel){
        const options:AxiosRequestConfig = {headers:{"Content-Type":"multipart/form-data"}}
        const response = await axios.post<ProductModel>(appConfig.productsUrl,product,options);
        const dbProduct=response.data;
       const action=productActions.addProduct(dbProduct);
       store.dispatch(action);
    }

}

export const productService = new ProductService();