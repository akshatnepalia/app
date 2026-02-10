import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import WhyChooseUs from "./pages/WhyChooseUs";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingCTA />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
