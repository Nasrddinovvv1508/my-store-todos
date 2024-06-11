// hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useGlobalContext } from "../hooks/useGlobalContext";

// icons
import { FaCaretDown } from "react-icons/fa";

function Product() {
  let { total } = useGlobalContext();

  let { id } = useParams();
  let { data, isPending, error } = useFetch(`https://dummyjson.com/products/${id}`)

  return (
    <div className="mt-20">
      <div>{isPending && <div className="load"><span className="loading loading-spinner loading-lg"></span></div>}</div>
      <div className="flex justify-between items-center gap-20 mb-24">
        <img className="w-1/2 border" src={data && data.thumbnail} alt="img" />
        <div className="flex flex-col">
          <div className="w-1/2">
            <h1 className="text-5xl mb-7 font-semibold">{data && data.title}</h1>
            <p className="opacity-60">
              {data && data.description}
            </p>
          </div>
          <div className="mt-10">
            <button className="btn btn-primary">+</button>
            <span className="mx-4">0</span>
            <button className="btn btn-primary">-</button>
            <br />
            <button className="mt-2 link text-blue-600">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product