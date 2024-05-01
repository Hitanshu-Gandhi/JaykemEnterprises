import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import CalciumChloridePowder from "../../../assets/images/calciumchloride/CalciumChloridePowder.jpg";
import BrineCalciumChloride from "../../../assets/images/calciumchloride/BrineCalciumChloride.webp";
import CalciumChlorideAnhydrous from "../../../assets/images/calciumchloride/CalciumChlorideAnhydrous.jpg";
import CalciumChlorideFused from "../../../assets/images/calciumchloride/CalciumChlorideFused.webp";
import CalciumChloridePrills from "../../../assets/images/calciumchloride/CalciumChloridePrills.jpg";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const CalciumChloride = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={CalciumChloridePowder}
            name="Calcium Chloride Powder"
            form="Powder"
            chemicalformula="CaCl2"
            molecularweight="110.98 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={CalciumChloridePrills}
            name="Calcium Chloride Prills"
            form="Granules"
            chemicalformula="CaCl2"
            molecularweight="110.98 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={CalciumChlorideFused}
            name="Calcium Chloride Fused"
            form="Fused/Lumps"
            chemicalformula="CaCl2"
            molecularweight="110.98 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={BrineCalciumChloride}
            name="Brine Calcium Chloride"
            form="Liquid"
            chemicalformula="CaCl2"
            molecularweight="110.98 g/mol"
            grade="Technical Gade"
            packagingtype="Barrel"
            packagingsize="250 L
            "
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={CalciumChlorideAnhydrous}
            name="Calcium Chloride Anhydrous"
            form="Anhydrous Powder"
            chemicalformula="CaCl2"
            molecularweight="110.98 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default CalciumChloride;
