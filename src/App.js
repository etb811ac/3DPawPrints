import './styles.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import ReactGA from 'react-ga';


import Home from "./pages/Home";
import Carrito from "./pages/Carrito"
import Plaquitas from "./pages/Plaquitas";
import Macetitas from "./pages/Macetitas";
import Figuritas from "./pages/Figuritas";
import Flips from "./pages/Flips";

import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';


const TRACKING_ID = "G-G5R6BM3CTK";
ReactGA.initialize(TRACKING_ID);


function App() {

  //global Variable
  const [products, setProducts] = useState([])

  const addProduct = (product) => {
    let tempArray = products
    tempArray.push(product)
    setProducts(tempArray)
  }

  const removeProduct = (product) => {
    let tempArray = products
    setProducts(tempArray.filter((item) => { return item !== product }));
  }


  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>

            <Route index element={<Home products={products} />} />
            <Route path="carrito" element={<Carrito products={products} setProducts={setProducts} removeProduct={removeProduct} />} />
            <Route path="plaquitas" element={<Plaquitas products={products} addProduct={addProduct} />} />
            <Route path="macetitas" element={<Macetitas products={products} addProduct={addProduct} />} />
            <Route path="figuritas" element={<Figuritas products={products} addProduct={addProduct} />} />
            <Route path="flips" element={<Flips products={products} addProduct={addProduct} />} />

          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
