import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";

export function AddProduct(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productService.addProduct(product)
            notify.success("product has been added")
        } catch (err: any) {
            notify.error(err);

        }
    }
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <label>Name:</label>
                <input type="text" {...register("name", ProductModel.nameValidation)} />
                <span className="error"> {formState.errors?.name?.message}</span>
                <label>Price:</label>
                <input type="number" {...register("price")} />
                <label>Stock:</label>
                <input type="number" {...register("stock")} />
                <label>Image:</label>
                <input type="file"{...register("image")} />
                <button>Add</button>

            </form>
        </div>
    );
}
