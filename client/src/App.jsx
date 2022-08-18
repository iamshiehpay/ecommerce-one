import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Route, Routes } from 'react-router-dom';
import ProtectRoute from "./pages/ProtectRoute";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/login"
        element={
          <ProtectRoute user={user}>
            <Login/>
          </ProtectRoute>
        } 
      />
      <Route path="/register" 
      element={
        <ProtectRoute user={user}>
          <Register/>
        </ProtectRoute>
      } 
      />
      
    </Routes>
    );
};

export default App;