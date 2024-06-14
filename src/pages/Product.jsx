// hooks
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useRef, useState } from "react";

// icons
import { FaCaretDown } from "react-icons/fa";

function Product() {
  let { changeTotal, setChangeTotal } = useGlobalContext();

  let { id } = useParams();
  let { data, isPending, error } = useFetch(`https://dummyjson.com/products/${id}`)

  let firstElementRef = useRef(null)
  let secondElementRef = useRef(null)
  let mainElementRef = useRef(null)

  let number = 0

  // functions
  let handlePlus = () => {
    if (firstElementRef.current) {
      mainElementRef.current.textContent = number += 1;
    }
  }

  let handleMinus = () => {
    if (secondElementRef.current) {
      if (number > 0) {
        mainElementRef.current.textContent = number -= 1
      }
    }
  }

  let varToral;
  let handleAdd = () => {
    varToral = changeTotal += number;

    setChangeTotal(varToral);
    mainElementRef.current.textContent = 0;
    localStorage.setItem('total', varToral);
  }

  document.addEventListener(`DOMContentLoaded`, () => {
    console.log(localStorage.getItem(`total`));
  })

  return (
    <div className="mt-20">
      <div>{isPending && <div className="min-h-screen grid place-items-center"><span className="loading loading-spinner loading-lg"></span></div>}</div>
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
            <button ref={firstElementRef} onClick={handlePlus} className="btn btn-primary">+</button>
            <span ref={mainElementRef} className="mx-4">0</span>
            <button ref={secondElementRef} onClick={handleMinus} className="btn btn-primary">-</button>
            <br />
            <button onClick={handleAdd} className="mt-2 link text-blue-600">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product