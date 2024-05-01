import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import QuickLimePowder from "../../../assets/images/quicklime/QuickLimePowder.jpg";
import QuickLimeLumps from "../../../assets/images/quicklime/QuickLimeLumps.jpg";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const QuickLime = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={QuickLimePowder}
            name="Quick Lime Powder"
            form="Powder"
            chemicalformula="CaO"
            molecularweight="56.08 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={QuickLimeLumps}
            name="Quick Lime Lumps"
            form="Lumps"
            chemicalformula="CaO"
            molecularweight="56.08 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickLime;
