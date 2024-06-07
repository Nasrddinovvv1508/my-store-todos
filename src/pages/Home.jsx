// custom hooks
import { useFetch } from '../hooks/useFetch';

// components
import ProductList from '../components/ProductList';

function Home() {
  let { data, isPending, error } = useFetch('https://dummyjson.com/products');
  console.log(data);

  return (
    <div>
      {isPending && <div><span className="loading loading-spinner loading-lg"></span></div>}
      {data && <ProductList data={data} />}
    </div>
  )
}

export default Home