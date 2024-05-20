import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useNavigate } from 'react-router-dom';

export function AddProduct(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate();
    async function sendToDb(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productService.addProduct(product)
            notify.success("product has been added")
              navigate('/products');
        } catch (err: any) {
            notify.error(err);

        }
    }
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(sendToDb)}>
                <label>Name:</label>
                <input type="text" {...register("name", ProductModel.nameValidation)} />
                <span className="error"> {formState.errors?.name?.message}</span>
                <label>Price:</label>
                <input type="number" {...register("price", ProductModel.priceValidation)} />
                <span className="error"> {formState.errors?.price?.message}</span>
                <label>Stock:</label>
                <input type="number" {...register("stock", ProductModel.stockValidation)} />
                <span className="error"> {formState.errors?.stock?.message}</span>
                <label>Image:</label>
                <input type="file"{...register("image",ProductModel.imageValidation)} />
                <span className="error"> {formState.errors?.image?.message}</span>

                <button>Add</button>

            </form>
        </div>
    );
}
