import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import MagnesiumCarbonateLight from "../../../assets/images/magnesiumcarbonatelight/MagnesiumCarbonateLight.webp";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const MagnesiumCarbonate = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={MagnesiumCarbonateLight}
            name="Magnesium Carbonate Light"
            form="Powder"
            chemicalformula=" MgCO3"
            molecularweight="84.3139 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="20 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default MagnesiumCarbonate;
