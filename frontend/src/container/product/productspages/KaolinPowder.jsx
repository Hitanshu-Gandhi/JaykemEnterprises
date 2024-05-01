import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import KaolinPowderr from "../../../assets/images/kaolinpowder/KaolinPowder.jpg";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const KaolinPowder = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={KaolinPowderr}
            name="Kaolin Powder"
            form="Powder"
            chemicalformula="Al2H4O9Si2"
            molecularweight="258.16 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default KaolinPowder;
