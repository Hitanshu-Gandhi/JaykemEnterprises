
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./container/home/Home.jsx"
import About from "./container/about/About";
import Contact from "./container/contact/Contact.jsx";
import Product from "./container/product/Product";
import Blog from "./container/blog/Blog.jsx";
import CalciumChloride from "./container/product/productspages/CalciumChloride.jsx";
import MagnesiumCarbonate from "./container/product/productspages/MagnesiumCarbonate.jsx";
import Alum from "./container/product/productspages/Alum.jsx";
import AluminiumSulphate from "./container/product/productspages/AluminiumSulphate.jsx";
import CalciumCarbonate from "./container/product/productspages/CalciumCarbonate.jsx";
import FerrousSulphate from "./container/product/productspages/FerrousSulphate.jsx";
import HydratedLime from "./container/product/productspages/HydratedLime.jsx";
import QuickLime from "./container/product/productspages/QuickLime.jsx";
import KaolinPowder from "./container/product/productspages/KaolinPowder.jsx";
import Preloader from "./components/preloader/Preloader.jsx";
import BlogForm from "./container/forms/blog/BlogForm.jsx";
import ProductMain from "./container/forms/productMain/ProductMain.jsx";
import ProductSub from "./container/forms/productSub/ProductSub.jsx";
import ExpandBlog from "./container/blog/ExpandBlog.jsx";
import Login from "./container/auth/login.jsx";

function App() {

  // Preloader
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? <Preloader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs/:id" element={<ExpandBlog />} />
          <Route path="/product/calciumchloride" element={<CalciumChloride />} />
          <Route path="/product/alum" element={<Alum />} />
          <Route path="/product/aluminiumsulphate" element={<AluminiumSulphate />} />
          <Route path="/product/calciumcarbonate" element={<CalciumCarbonate />} />
          <Route path="/product/ferroussulphate" element={<FerrousSulphate />} />
          <Route path="/product/hydratedlime" element={<HydratedLime />} />
          <Route path="/product/quicklime" element={<QuickLime />} />
          <Route path="/product/kaolinpowder" element={<KaolinPowder />} />
          <Route path="/product/magnesiumcarbonate" element={<MagnesiumCarbonate />} />
          <Route path="/admin/blogform" element={<BlogForm/>} />
          <Route path="/admin/productmain" element={<ProductMain />} />
          <Route path="/admin/productsub" element={<ProductSub />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
