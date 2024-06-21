import { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa"
import { useGlobalContext } from "../hooks/useGlobalContext";

function CartItem({ product }) {
    let [amount, setAmount] = useState(product.amount);
    let { deleteProduct, increaseAmount, decreaseAmount } = useGlobalContext();

    return (
        <li className="flex items-center justify-around border rounded-lg mb-3 py-4">
            <img src={product.thumbnail} alt="img" className="w-36" />
            <h2>{product.title}</h2>

            <div className="flex items-end gap-3 flex-col">
                <div className="flex mb-4">
                    <div className="flex items-center gap-4 mr-7">
                        <button className="btn" onClick={() => increaseAmount(product.id)}>+</button>
                        <span>{product.amount}</span>
                        <button className="btn" onClick={() => {
                            decreaseAmount(product.id)
                        }
                        }>-</button>
                    </div>
                    <button className="btn bg-red-500 text-white hover:bg-red-700" onClick={() => deleteProduct(product.id)}>
                        <FaTrash />
                    </button>
                </div>
                <p className="">
                    product price: <span className="ml-1 font-semibold">{product.price * product.amount}$</span>
                </p>
            </div>
        </li>
    )
}

export default CartItem