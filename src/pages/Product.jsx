import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  let {id} = useParams();
  let {data, setData, error} = useFetch(`https://dummyjson.com/products/${id}`)
  console.log(data);

  return (
    <div>
      <h1>Hello product {id}</h1>
    </div>
  )
}

export default Product