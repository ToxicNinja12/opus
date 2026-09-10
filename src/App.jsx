import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // your existing homepage with Hero, About, etc.
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";

// AcouMAX
import AcouMax from "./pages/AcouMax";
import PlainPanel from "./pages/acoumax/PlainPanel";
import GroovedDesignPanel from "./pages/acoumax/GroovedDesignPanel";
import Acoustic3DPanel from "./pages/acoumax/Acoustic3DPanel";
import BafflesCeiling from "./pages/acoumax/BafflesCeiling";
import CloudCeiling from "./pages/acoumax/CloudCeiling";
import DeskPartition from "./pages/acoumax/DeskPartition";
import PrintedDesignPanel from "./pages/acoumax/PrintedDesignPanel";
import ScreenPartition from "./pages/acoumax/ScreenPartition";
import AcousticPhoneBooth from "./pages/acoumax/AcousticPhoneBooth";
import ModularWallAcousticSystem from "./pages/acoumax/ModularWallAcousticSystem";

// AcouFAB
import AcouFab from "./pages/AcouFab";
import PvcTrackStretchSystem from "./pages/acoufab/PvcTrackStretchSystem";
import ThreeDWrappedSystem from "./pages/acoufab/3DWrappedSystem";
import BafflesCloudCeilingSystem from "./pages/acoufab/BafflesCloudCeilingSystem";

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
        <Route
          path="/products/architectural-acoustic/acoumax/acoustic-3d-panels"
          element={<Acoustic3DPanel />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/baffles-ceiling"
          element={<BafflesCeiling />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/cloud-ceiling"
          element={<CloudCeiling />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/desk-partition"
          element={<DeskPartition />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/printed-design-panel"
          element={<PrintedDesignPanel />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/screen-partition"
          element={<ScreenPartition />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/acoustic-phone-booth"
          element={<AcousticPhoneBooth />}
        />
        <Route
          path="/products/architectural-acoustic/acoumax/modular-wall-acoustic-system"
          element={<ModularWallAcousticSystem />}
        />
        <Route
          path="/products/architectural-acoustic/acoufab"
          element={<AcouFab />}
        />
        <Route
          path="/products/architectural-acoustic/acoufab/pvc-track-stretch-system"
          element={<PvcTrackStretchSystem />}
        />
        <Route
          path="/products/architectural-acoustic/acoufab/3d-wrapped-system"
          element={<ThreeDWrappedSystem />}
        />
        <Route
          path="/products/architectural-acoustic/acoufab/cloud-ceiling-system"
          element={<BafflesCloudCeilingSystem />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
