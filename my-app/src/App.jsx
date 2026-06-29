import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

function App() {
 

  return (
  <Routes>
    <Route path="/" element={<Layout />}>
   <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="contact" element={<Contact />} />

        <Route path="login" element={<Login />} />
        <Route path="Product" element={<Product />} />
       <Route path="product/:id" element={<ProductDetail />} />

        <Route path="signup" element={<SignUp />} />

    </Route>
  </Routes>
    
  );
}

export default App
