import Home from './pages/Home';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
 import Products from './components/Products';
import NewsLetter from './components/Newsletter';
import Footer from './components/Footer';
import CategoryPage from './pages/Categorypage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart'
import Login from './pages/Login';
import Register from './pages/Register'
import Product from './components/Product';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
  
      <Routes>
        
      <Route exact path="/" element={<Home />} />
        <Route exact path="/productpage" element={<ProductPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/category" element={<CategoryPage />} />
      </Routes>
   
    </div>
  );
}
export default App;
