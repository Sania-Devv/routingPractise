import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
//import Auth from "my-app/src/layout/Auth.jsx"
import MainLayout from "./layout/MainLayout"
import Auth from "./layout/Auth"
function App() {
 

  return (
  <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="contact" element={<Contact />} />
        <Route path="Product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail />} />
         <Route element={<ProtectedRoute/>}>
         <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
    </Route>
        <Route  element={<Auth/>}> 
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} /> 
        </Route>
       
        {/* <Route element={<ProtectedRoute/>}>
         <Route path="dashboard" element={<Dashboard/>}/>
        </Route> */}
       
    
    <Route path="*" element={<NotFound/>}/>
  </Routes>
    
  );
}

export default App
