import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import AlumPowder from "../../../assets/images/alum/AlumPowder.webp";
import AlumLumps from "../../../assets/images/alum/AlumLumps.jpg";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const Alum = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={AlumPowder}
            name="Alum Powder"
            form="Powder"
            chemicalformula="(NH4)Al(SO4)2"
            molecularweight=" 237.15 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={AlumLumps}
            name="Alum Lumps"
            form="Lumps"
            chemicalformula="(NH4)Al(SO4)2"
            molecularweight=" 237.15 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default Alum;
