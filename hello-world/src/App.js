
import React, { useState } from 'react'
import data from './components/Shopping_App/Data';
import Header from './components/Shopping_App/Header';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Product from './components/Shopping_App/Product';
import Wishlist from './components/Shopping_App/Wishlist';
import Signup from './components/Shopping_App/Signup';
import Login from './components/Shopping_App/Login';
import Pagination from './components/Shopping_App/Pagination';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const[currentPage,setCurrentPage]=useState(1)
const[postsPerPage,setPostsPerPage]=useState(8)

const lastPostIndex=currentPage*postsPerPage;
const firstPostIndex=lastPostIndex-postsPerPage;
 const productItemss= productItems.slice(firstPostIndex,lastPostIndex)

  const handleAddProduct = (product) => {
    // icon change code
    let index = cartItems.findIndex((x) => x === product.id);
    if (index >= 0) cartItems.splice(index, 1);
    else cartItems.push(product.id);
    setCartItems([...cartItems]);
    
  }
  let cartItemss = productItems.filter(users => cartItems.includes(users.id));
// const handleRemoveProduct=(id)=>{
//   let index = cartItems.indexOf(id);
//   console.log(index);
//   let temp = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
//   setCartItems(temp);
// }

const handleRemoveProduct = id => {
  let index = cartItems.indexOf(id);
  console.log(index);
  let temp = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  setCartItems(temp);
}
return (
  <div>



    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Product productItems={productItemss} data={data} cartItems={cartItems} handleAddProduct={handleAddProduct} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>} />
        <Route path="/wishList/" exact element={<Wishlist cartItemss={cartItemss} handleRemoveProduct={handleRemoveProduct}/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Pagination
                totalPosts={productItems.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </Router>




  </div>
)
}

export default App