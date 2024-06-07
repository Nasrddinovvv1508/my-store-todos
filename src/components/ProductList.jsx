// components
import ProductCard from "./ProductCard";

function ProductList({ data }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {data.products.map((product) => {
                return <ProductCard product={product}/>
            })}
        </div>
    )
}

export default ProductList