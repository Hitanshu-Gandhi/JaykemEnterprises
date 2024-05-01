import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import FerrousSulphateCrystal from "../../../assets/images/ferroussulphate/FerrousSulphateCrystal.jpg";
import FerrousSulphateDried from "../../../assets/images/ferroussulphate/FerrousSulphateDried.jpg";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const FerrousSulphate = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={FerrousSulphateCrystal}
            name="Ferrous Sulphate Crystal"
            form="Granules"
            chemicalformula="FeSO4"
            molecularweight="151.91 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={FerrousSulphateDried}
            name="Ferrous Sulphate Dried"
            form="Powder"
            chemicalformula="FeSO4 xH2O"
            molecularweight="151.91 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default FerrousSulphate;
