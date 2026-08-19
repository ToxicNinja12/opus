import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // your existing homepage with Hero, About, etc.
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductCategory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
