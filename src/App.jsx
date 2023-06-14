import style from "./App.module.css";
import { useState } from "react";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ProductCardDetail } from "./components/common/productCardDetail/ProductCardDetail";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";
import { products } from "./productsMock";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          
          {/* <Route path="/carrito" element={<CartContainer />} /> */}


        </Route>
      </Routes>
    </BrowserRouter>


    // <>
    //   <Navbar contador={counter} />
    //   <main>
    //     <ItemListContainer />
    //     <ItemDetailContainer/>
        
    //   </main>
    // </>
  );
}

export default App;
