// components
import ProductCard from "./ProductCard";

function ProductList({ data }) {
    return (
        <ul className="grid grid-cols-3 gap-4">
            {data.products.map((product) => {
                return <ProductCard key={product.id} product={product} />
            })}
        </ul>
    )
}

export default ProductList