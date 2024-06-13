// custom hooks
import { useFetch } from '../hooks/useFetch';

// components
import ProductList from '../components/ProductList';

function Home() {
  let { data, isPending, error } = useFetch('https://dummyjson.com/products');

  return (
    <div>
        {isPending && <div className='min-h-screen grid place-items-center'><span className="loading loading-spinner loading-lg"></span></div>}
      {data && <ProductList data={data} />}
    </div>
  )
}

export default Home