
import './assets/style.css'
import Footer from './components/Footer';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import { Cart } from './pages/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';


function App() {
  const baseUrl = process.env.REACT_APP_API_URL;
  const [keywords, setKeywords] = useState('')
  const [cartTotal, setCartTotal] = useState(0)
  const [cartTrace, setCarttrace] = useState(0)
  const [products, setProducts] = useState([])

  const filterSearch = () => {

    if(keywords == "")
    {
      getProducts()
    }else{
      const filteredProducts = products?.filter(product => {
        const filterValue = product?.name.toLowerCase();
        return filterValue.includes(keywords.toLowerCase());
      });
  
      setProducts(filteredProducts)
    }
   
  }


  useEffect(() => {
    filterSearch()
  }, [keywords])

  const getProducts = async() => {
   
    const apiUrl = `${baseUrl}products`;
    
    // console.log(apiUrl);
    try {
      const rawProductsResponse = await fetch(apiUrl);
    
      if (!rawProductsResponse.ok) {
        throw new Error('Network response was not ok');
      }
    
      // Parse the response body and store it in a variable
      const rawProductsData = await rawProductsResponse.json();
      console.log(rawProductsData);
      setProducts(rawProductsData)
    
      // Use 'products' in your code as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
      getProducts()
  },[])

  const cartRefetch = () => {
    const cart = JSON.parse(localStorage.getItem("cartData"))
    setCartTotal(cart?.length)
  }

  useEffect(() => {
    cartRefetch()
  },[cartTrace])


  return (
    <div>
      <Header keywords={keywords} setKeywords={setKeywords} cartTotal={cartTotal} />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home products={products} cartTrace={cartTrace} setCarttrace={setCarttrace} /> } />
          <Route path='/cart' element={<Cart cartTrace={cartTrace} setCarttrace={setCarttrace} /> } />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
