import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductCard = (prop) => {
  return (
    <Card className="mt-6 w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={prop.image} alt="card-image" className=" w-full h-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-Roboto">
          {prop.name}
        </Typography>
        <Typography className=" font-Poppins">{prop.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={prop.where}>
          <Button className=" bg-blue-900 font-Roboto">More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
