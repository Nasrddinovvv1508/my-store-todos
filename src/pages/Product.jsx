import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  let { id } = useParams();
  let { data, isPending, error } = useFetch(`https://dummyjson.com/products/${id}`)
  console.log(data);

  return (
    <div>
      <span>{isPending && <div className="load"><span className="loading loading-spinner loading-lg"></span></div>}</span>
      <h1>{data && `Hello product ${id}`}</h1>
    </div>
  )
}

export default Product