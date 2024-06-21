import CartItem from "../components/CartItem"
import { useGlobalContext } from "../hooks/useGlobalContext"

function Cart() {
    let { total, products, deleteProduct, totalPrice } = useGlobalContext()

    return (
        <ul id="list" className="site-container">
            {!products.length && <h1 className="no-products">No Product yet...</h1>}
            {products.length > 0 && products.map((product) => {
                return (
                    <CartItem key={product.id} product={product} />
                )
            })}
            {products.length && <p id="totalPrice" className='text-end text-2xl mr-8'>
                Total price: {totalPrice}$
            </p>
            }
        </ul>
    )
}

export default Cart