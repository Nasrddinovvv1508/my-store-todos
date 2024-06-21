import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa"
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

function CartItem({ product }) {
    let [amount, setAmount] = useState(product.amount);
    let { deleteProduct, increaseAmount, decreaseAmount } = useGlobalContext();

    return (
        <li className="flex items-center justify-around border rounded-lg mb-5 py-4 duration-300">
            <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt="img" className="w-36" />
            </Link>
            <h2 className="text-2xl font-semibold">{product.title}</h2>

            <div className="flex items-end gap-3 flex-col z-10">
                <div className="flex mb-4">
                    <div className="flex items-center gap-4 mr-7">
                        <button className="btn" onClick={() => increaseAmount(product.id)}>+</button>
                        <span>{product.amount}</span>
                        <button className="btn" onClick={() => {
                            decreaseAmount(product.id);
                            if (product.amount <= 1) {
                                deleteProduct(product.id)
                            }
                        }
                        }>-</button>
                    </div>
                    <button className="btn bg-red-500 text-white hover:bg-red-700" onClick={() => deleteProduct(product.id)}>
                        <FaTrash />
                    </button>
                </div>
                <p>
                    product price: <span className="ml-1 font-semibold">{(product.price * product.amount).toFixed(2)}$</span>
                </p>
            </div>
        </li>
    )
}

export default CartItem