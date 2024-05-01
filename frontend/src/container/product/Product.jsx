import React from "react";
import Header from "../../components/navbar/Header";
import Header2 from "../../components/navbar/Header2";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/cards/ProductCard";
import calciumchloride from "../../assets/images/product/CalciumChloride.jpeg";
import calciumcarbonate from "../../assets/images/product/CalciumCarbonate.jpeg";
import alum from "../../assets/images/product/Alum.jpg";
import quicklime from "../../assets/images/product/QuickLime.jpeg";
import hydratedlime from "../../assets/images/product/HydratedLime.webp";
import ferroussulphate from "../../assets/images/product/FerrousSulphate.jpeg";
import aluminiumsulphate from "../../assets/images/product/AluminiumSulphate.jpeg";
import kaolinpowder from "../../assets/images/product/KaolinPowder.jpg";
import magnesiumcarbonate from "../../assets/images/product/MagnesiumCarbonate.webp";

const Product = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-6 p-6">
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={calciumchloride}
            name="Calcium Chloride"
            description="Calcium chloride is an inorganic compound, a salt with the chemical formula CaCl2."
            where="/product/calciumchloride"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={calciumcarbonate}
            name="Calcium Carbonate"
            description="Calcium carbonate is an inorganic salt primarily used to manage low calcium conditions."
            where="/product/calciumcarbonate"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={alum}
            name="Alum"
            description="Alum, known as fitkari in Hindi, is a naturally occurring salt that offers several benefits to its users."
            where="/product/alum"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={quicklime}
            name="Quick Lime"
            description="Quicklime is an alternate name for the chemical compound known as calcium oxide."
            where="/product/quicklime"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={hydratedlime}
            name="Hydrated Lime"
            description="The largest single use remains steel manufacturing, where it is used to remove impurities."
            where="/product/hydratedlime"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={ferroussulphate}
            name="Ferrous Sulphate"
            description="It is an iron salt with the chemical formula FeSO4. It is an iron salt popularly known as green vitriol."
            where="/product/ferroussulphate"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={aluminiumsulphate}
            name="Aluminium Sulphate"
            description="It is used in water purification and chemical phosphorus removal from wastewater."
            where="/product/aluminiumsulphate"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={kaolinpowder}
            name="Kaolin Powder"
            description="It is a layered silicate mineral. In early 1990s, active substance of medicine Kaopectate."
            where="/product/kaolinpowder"
          />
        </div>
        <div className=" flex justify-center align-middle items-center">
          <ProductCard
            image={magnesiumcarbonate}
            name="Magnesium Carbonate"
            description="MgCO3 is an inorganic salt with the chemical name Magnesium Carbonate."
            where="/product/magnesiumcarbonate"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
