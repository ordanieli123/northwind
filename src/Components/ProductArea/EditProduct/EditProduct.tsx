import { useForm } from "react-hook-form";
import "./EditProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function EditProduct(): JSX.Element {
    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.prodId;
    useEffect(() => {
        productService.getOneProduct(id)
            .then(product => {
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);

            }).catch(err => notify.error(err))
    }, []);
    async function sendToDb(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productService.editProduct(product)
            notify.success("product has been updated")
            navigate('/products');
        } catch (err: any) {
            notify.error(err);

        }
    }
    return (
        <div className="EditProduct">
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
                <input type="file"{...register("image", ProductModel.imageValidation)} />
                <span className="error"> {formState.errors?.image?.message}</span>

                <button>Edit</button>

            </form>
        </div>
    );
}
