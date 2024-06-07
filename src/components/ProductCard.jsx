import { Link } from "react-router-dom"

function ProductCard({ product }) {
    let { id, brand, availabilityStatus, description, category, thumbnail, price, title } = product

    return (
        <>
            <Link className="card bg-base-100 shadow-xl">
                <figure><img style={{width: "100%", height: "100%", overflow: "auto" }} src={thumbnail} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-1">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="mb-3">{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline font-bold">{price}$</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard