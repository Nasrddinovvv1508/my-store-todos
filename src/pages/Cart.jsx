import { useGlobalContext } from "../hooks/useGlobalContext"
import { FaTrash } from "react-icons/fa"

function Cart() {
    let { total, products, deleteProduct } = useGlobalContext()

    return (
        <div className="site-container">
            {products.length > 0 && products.map((product) => {
                return (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <span>{product.amount}</span>
                        <button className="border-2" onClick={() => deleteProduct(product.id)}>
                            <FaTrash />
                        </button>
                    </li>
                )
            })}
        </div>
    )
}

export default Cart