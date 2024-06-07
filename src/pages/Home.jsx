// custom hooks
import { useFetch } from '../hooks/useFetch';

// components
import ProductList from '../components/ProductList';

function Home() {
  let { data, isPending, error } = useFetch('https://dummyjson.com/products');

  return (
    <div>Home</div>
  )
}

export default Home