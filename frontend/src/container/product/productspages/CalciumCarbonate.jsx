import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import CalciumCarbonateNatural from "../../../assets/images/calciumcarbonate/CalciumCarbonateNatural.jpg";
import CalciumCarbonatePrecipitated from "../../../assets/images/calciumcarbonate/CalciumCarbonatePrecipitated.jpg";
import CalciumCarbonatePowder from "../../../assets/images/calciumcarbonate/CalciumCarbonatePowder.webp";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const CalciumCarbonate = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={CalciumCarbonateNatural}
            name="Calcium Carbonate Natural"
            form="Lump"
            chemicalformula="CaCO3"
            molecularweight="100.0869 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={CalciumCarbonatePowder}
            name="Calcium Carbonate Powder"
            form="Powder"
            chemicalformula="CaCO3"
            molecularweight="100.0869 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={CalciumCarbonatePrecipitated}
            name="Calcium Carbonate Precipitated"
            form="Powder"
            chemicalformula="CaCO3"
            molecularweight="100.09 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default CalciumCarbonate;
