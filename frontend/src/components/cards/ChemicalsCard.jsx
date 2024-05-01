import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ChemicalsCard = (prop) => {
  return (
    <Card className=" h-[22rem] flex-row">
      <CardHeader shadow={false} floated={false} className="m-0 rounded-r-none">
        <img src={prop.image} className="h-[22rem] w-[22rem] md:block hidden " />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className=" mb-4 font-Roboto">
          {prop.name}
        </Typography>
        <Typography color="gray" className="mb-4 font-normal font-Roboto">
          <table className=" text-center border-collapse border border-[#0f0f3f] table-auto">
            <tbody className=" rounded-b-lg">
              <tr>
                <td className="border border-[#0f0f3f] p-1">Form</td>
                <td className="border border-[#0f0f3f] p-1">{prop.form}</td>
              </tr>
              <tr>
                <td className="border border-[#0f0f3f] p-1">
                  Chemical Formula
                </td>
                <td className="border border-[#0f0f3f] p-1">
                  {prop.chemicalformula}
                </td>
              </tr>
              <tr>
                <td className="border border-[#0f0f3f] p-1">
                  Molecular Weight
                </td>
                <td className="border border-[#0f0f3f] p-1">
                  {prop.molecularweight}
                </td>
              </tr>
              <tr>
                <td className="border border-[#0f0f3f] p-1">Grade</td>
                <td className="border border-[#0f0f3f] p-1">{prop.grade}</td>
              </tr>
              <tr>
                <td className="border border-[#0f0f3f] p-1">Packaging Type</td>
                <td className="border border-[#0f0f3f] p-1">
                  {prop.packagingtype}
                </td>
              </tr>
              <tr>
                <td className="border border-[#0f0f3f] p-1">Packaging Size</td>
                <td className="border border-[#0f0f3f] p-1">
                  {prop.packagingsize}
                </td>
              </tr>
            </tbody>
          </table>
        </Typography>
        <Link to={"/contact"}>
          <Button variant="text" className="flex items-center hover:bg-blue-900 hover:text-white gap-2 font-Poppins">
            Inquery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default ChemicalsCard;
