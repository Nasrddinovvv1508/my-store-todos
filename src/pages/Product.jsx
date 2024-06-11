// hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// icons
import { FaCaretDown } from "react-icons/fa";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Product() {
  let {color, setColor} = useContext(GlobalContext)

  let { id } = useParams();
  let { data, isPending, error } = useFetch(`https://dummyjson.com/products/${id}`)

  return (
    <div className="mt-20">
      <div>{isPending && <div className="load"><span className="loading loading-spinner loading-lg"></span></div>}</div>
      <div className="flex justify-between items-center gap-20 mb-24">
        <img className="w-1/2 border" src={data && data.thumbnail} alt="img" />
        <div className="w-1/2">
          <h1 className="text-5xl mb-7 font-semibold">{data && data.title}</h1>
          <p className="opacity-60">
            {data && data.description}
          </p>
          <button onClick={() => setColor(`lightgray`)} className="w-24 py-2 flex items-center justify-center gap-2 mt-24 text-blue-800">Down <FaCaretDown/></button>
        </div>
      </div>
    </div>
  )
}

export default Product