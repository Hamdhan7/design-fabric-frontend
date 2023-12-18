import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import IntroSection from "./Components/Header/Header";
import ProductSection from "./Components/ProductSection/ProductSection";
import AllProductSection from "./Components/AllProductsSection/AllProductSection";
import Footer from "./Components/Footer/Footer"
// import AdminProducts from "./Components/AdminProducts/AdminProducts";
// import MuiTest from "./Components/MUITest/MuiTest";
import AdminPage from "./Components/AdminPage/AdminPage";
import UserProduct from "./Components/UserProducts/UserProducts"
import Login from "./Components/LoginPage/Login"
import Register from './Components/RegisterPage/Register';



function App() {
  return (
    
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path="/" element={<IntroSection />}></Route>
    <Route path="products" element={<AllProductSection />} />
    <Route path="admin" element={<AdminPage />} />
    {/* <Route path="auth/register" element={<Register />} />
    <Route path="auth/login" element={<Login />} /> */}


</Routes>
</BrowserRouter>





  );
}

export default App;
