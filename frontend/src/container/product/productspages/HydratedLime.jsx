import React from 'react'
import Header from "../../../components/navbar/Header";
import Header2 from "../../../components/navbar/Header2";
import HydratedLimee from "../../../assets/images/hydratedlime/HydratedLime.webp";
import ChemicalsCard from "../../../components/cards/ChemicalsCard";

const HydratedLime = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 p-6">
        <div className="flex justify-center items-center">
          <ChemicalsCard
            image={HydratedLimee}
            name="Hydrated Lime"
            form="96%, 90%, 80%"
            chemicalformula="Ca(OH)2"
            molecularweight="74.09 g/mol"
            grade="Technical Gade"
            packagingtype="HDPE Bag"
            packagingsize="25 Kg"
          />
        </div>
      </div>
    </div>
  )
}

export default HydratedLime
