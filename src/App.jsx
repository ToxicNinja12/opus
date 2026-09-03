import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // your existing homepage with Hero, About, etc.
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import AcouMax from "./pages/AcouMax";
import PlainPanel from "./pages/acoumax/PlainPanel";
import GroovedDesignPanel from "./pages/acoumax/GroovedDesignPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductCategory />} />
        <Route
          path="/products/architectural-acoustic/acoumax"
          element={<AcouMax />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/plain-panel"
          element={<PlainPanel />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/grooved-design-panel"
          element={<GroovedDesignPanel />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
