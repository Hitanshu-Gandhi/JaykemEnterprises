import React from "react";
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import AluminiumSulphateFerric from "../../../assets/images/aluminiumsulphate/AluminiumSulphateFerric.jpeg";
import AluminiumSulphateNonFerric from "../../../assets/images/aluminiumsulphate/AluminiumSulphateNonFerric.jpg";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const AluminiumSulphate = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={AluminiumSulphateFerric}
            name="Aluminium Sulphate Ferric"
            form="Powder"
            chemicalformula="Al2(SO4)3"
            molecularweight="342.15 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={AluminiumSulphateNonFerric}
            name="Aluminium Sulphate NonFerric"
            form="Powder"
            chemicalformula="NH4Fe(SO4)2"
            molecularweight="482.25 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="50 Kg"
          />
        </div>
      </div>
    </div>
  );
};

export default AluminiumSulphate;
