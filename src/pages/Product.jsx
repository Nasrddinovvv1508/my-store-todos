// hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useEffect, useRef, useState } from "react";

import { FaCaretDown } from "react-icons/fa";

function Product() {
  // hooks
  let { id } = useParams();
  let { data, isPending, error } = useFetch(`https://dummyjson.com/products/${id}`)
  let [amount, setAmount] = useState(0);
  let { addProducts } = useGlobalContext()

  // functions
  let animationPing = document.getElementById(`animationPing`)

  let handleAdd = () => {
    addProducts({ ...data, amount });

    setAmount(0);
    animationPing.classList.remove(`hidden`);
    setTimeout(() => {
      animationPing.classList.add(`hidden`);
    }, 5000);
  }

  return (
    <div className="mt-20">
      <div>{isPending && <div className="min-h-screen grid place-items-center"><span className="loading loading-spinner loading-lg"></span></div>}</div>
      <div className="flex justify-between items-center gap-20 mb-24">
        <img className="w-1/2 border" src={data && data.thumbnail} alt="img" />
        <div className="flex flex-col">
          <div className="w-1/2">
            <h1 className="text-5xl mb-6 font-semibold">{data && data.title}</h1>
            <p className="opacity-60 mb-3">
              {data && data.description}
            </p>
            <div>
              <span className="rounded-full border-2 p-1 badge badge-secondary font-bold">{data && data.price}$</span>
            </div>
          </div>
          <div className="mt-8">
            <button onClick={() => setAmount(amount + 1)} className="btn btn-primary">+</button>
            <span className="mx-4"> {amount} </span>
            <button onClick={() => {
              if (amount > 0) {
                setAmount(amount - 1)
              }
            }} className="btn btn-primary">-</button>
            <br />
            <button onClick={handleAdd} className="mt-2 link text-blue-600">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product