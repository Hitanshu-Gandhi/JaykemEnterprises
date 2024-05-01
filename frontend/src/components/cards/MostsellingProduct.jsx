import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

const MostsellingProduct = (props) => {
  AOS.init();
  return (
    <div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className=" flex justify-center items-center"
      >
        <Card sx={{ maxWidth: 345 }} className="h-[35rem]">
          <CardActionArea className="h-[35rem]">
            <CardMedia component="img" height="140" image={props.img} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className=" font-Roboto">
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" className=" font-Poppins">
                {props.specs}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default MostsellingProduct;
