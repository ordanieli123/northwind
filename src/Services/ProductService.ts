import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {

	public async getAllProducts() {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        return products; // Returns Promise<ProductModel[]>
    }

    public async getOneProduct(id: number) {
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const product = response.data;
        return product;
    }

    public async addProduct(product:ProductModel){
        const response = await axios.post<ProductModel>(appConfig.productsUrl,product);
        const dbProduct=response.data;
        console.log(dbProduct);
    }

}

export const productService = new ProductService();