import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";

export function AddProduct(): JSX.Element {

    const { register, handleSubmit } = useForm<ProductModel>();

   async function send(product: ProductModel) {
       try{ 
        await productService.addProduct(product)
        alert("product has been added")
       }catch(err:any){
        alert(err.message);

       }
    }
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <label>Name:</label>
                <input type="text" {...register("name")} />
                <label>Price:</label>
                <input type="number" {...register("price")} />
                <label>Stock:</label>
                <input type="number" {...register("stock")} />
                <button>Add</button>

            </form>
        </div>
    );
}
