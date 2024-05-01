import React from "react";
import Lottie from "lottie-react";
import Chemistry from "../../assets/json/chemistry.json";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import quality from "../../assets/vectors/Quality.svg";
import delivery from "../../assets/vectors/Delivery.svg";
import flask from "../../assets/vectors/Flask.svg";
import service from "../../assets/vectors/Service.svg";
import CardH from "../../components/cards/MostsellingProduct";
import cacl2 from "../../assets/images/calcium chloride.webp";
import mgco3 from "../../assets/images/product/MagnesiumCarbonate.webp";
import ql from "../../assets/images/quick lime powder.webp";
import Testimonial from "../../components/testimonial/Testimonial";
import Header from "../../components/navbar/Header";
import Header2 from "../../components/navbar/Header2";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import ceopic from "../../assets/images/logo/Kalpesh Gandhi.jpg";
import developer from "../../assets/images/logo/Hitanshu.jpg";
import logistic from "../../assets/images/logo/pravin gangurde.jpg";
import Preloader from "../../components/preloader/Preloader";
const Home = () => {
  AOS.init({
    duration: 1200,
  });

  return (
    <>
      {/* {loading ? <Preloader /> : null} */}
      <Header />
      <Header2 />
      {/* part-1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center text-center h-[70vh] md:h-[86vh]">
        <div className="p-2 my-4 mx-4">
          <Lottie animationData={Chemistry} loop={true} autoPlay={true} />
        </div>
        <div>
          <h1
            className=" md:mx-1 my-4 text-2xl font-Roboto md:text-5xl"
            data-aos="zoom-in"
          >
            "Empowering Industry Through Chemical Excellence"
          </h1>
          <p className="md:text-xl text-[0.8rem] font-Poppins md:p-4">
            <span className=" bg-[#ff9d5c] rounded-3xl p-1 px-3 ">
            Your Trusted Source for Quality Chemical Solutions.
            </span>
          </p>
        </div>
      </div>

      {/* part-2 : Features */}
      <div className=" bg-[#f0f0f0] p-2 text-center">
        <h1 className="md:text-5xl text-4xl mx-auto leading-normal font-Roboto font-semibold mt-8">
          Features
        </h1>
        <div className="grid grid-cols-2 gap-12 p-4 md:grid-cols-4 md:gap-32 font-Poppins text-center md:p-20">
          <div className="p-2 md:mx-4 justify-center items-center grid">
            <img src={quality} alt="" className="h-[10rem]" />
            <h1>Quality Product</h1>
          </div>
          <div className="p-2 md:mx-4 justify-center items-center grid">
            <img src={delivery} alt="" className="h-[10rem]" />
            <h1>Fast & on time Delivery</h1>
          </div>
          <div className="p-2 md:mx-4 justify-center items-center grid">
            <img src={flask} alt="" className="h-[10rem]" />
            <h1>Premium Grade</h1>
          </div>
          <div className="p-2 md:mx-4 md:text-left justify-center items-center grid">
            <img src={service} alt="" className="h-[10rem]" />
            <h1>Customer Service</h1>
          </div>
        </div>
      </div>

      {/* part-3 : Most selling product */}
      <div>
        <h1 className="md:text-5xl text-4xl mx-auto leading-normal text-center font-Roboto font-semibold mt-8 p-2">
          Most Selling Products
        </h1>
        <div className="grid font-Poppins grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center p-6 md:mx-24 my-8">
          <Link to={"/product/calciumchloride"}>
            <CardH
              img={cacl2}
              name="Calcium Chloride"
              specs="Calcium chloride is used in the pulp and paper industry as a coagulant to improve the performance of organic polymers. It is often a component in the manufacture of paper to improve printability, as it improves electrical conductivity on the surface, facilitating sharper printing of text and imagery."
            />
          </Link>
          <Link to={"/product/magnesiumcarbonate"}>
            <CardH
              img={mgco3}
              name="Magnesium Carbonate"
              specs="Magnesium Carbonate is an inorganic salt with the chemical name Magnesium Carbonate. It is also called Magnesite Hydromagnesite or Barringtonite.  It acts as a fertiliser and as an antacid."
            />
          </Link>
          <Link to={"/product/quicklime"}>
            <CardH
              img={ql}
              name="Quick Lime"
              specs="Quick lime is used in the manufacture of iron and steel, and paper and pulp. A combination of phenolphthalein and calcium oxide is used in water detection pastes. Used in making porcelain and glass. In preparation of bleaching powder, calcium carbide, and calcium cyanamide."
            />
          </Link>
        </div>
        <div className=" flex justify-end mr-10 mb-6">
          <Link to={"/product"}>
            <button className=" text-blue-900 text-xl font-Poppins font-medium">
              More..
            </button>
          </Link>
        </div>
      </div>

      {/* part-4 Testimonial*/}
      <div className=" bg-[#f0f0f0] p-2">
        <div className="text-center py-10">
          <h1 className="md:text-5xl text-4xl mx-auto leading-normal font-Roboto font-semibold mb-12">
            Read What Others Say
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 font-Poppins max-w-5xl md:mx-auto mx-10 gap-8 group">
            <Testimonial
              // img={testi1}
              name="Varun Joshi"
              desc="I recently purchased chemicals from Jaykem Enterprises and was very pleased with the quality and affordability. The chemicals were of excellent quality and the price was very reasonable. I would highly recommend Jaykem Enterprises for anyone looking chemicals."
            />
            <Testimonial
              // img={testi2}
              name="Raghav Deshmukh"
              desc="Jaykem Enterprises delivers both quality and affordability. I recently purchased chemicals from them, and the balance of excellence and reasonable prices exceeded my expectations. Highly recommended!"
            />
            <Testimonial
              // img={testi3}
              name="Rohan Bhat"
              desc="I recently procured chemicals from Jaykem Enterprises and was pleasantly surprised by the superb quality and affordability. The excellence in their products coupled with reasonable prices makes Jaykem Enterprises my top recommendation for anyone seeking quality chemicals at a fair cost."
            />
          </div>
        </div>
      </div>

      {/* part-5 Team */}
      <div className="p-4">
        <div className="text-center">
          <h1 className="md:text-5xl text-4xl mx-auto underline mb-4 leading-normal font-Roboto font-semibold p-4">
            Meet Our Team
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="grid font-Poppins justify-center items-center text-center">
            <Card className="w-96 ">
              <CardHeader floated={false} className="h-80">
                <img src={ceopic} />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Kalpesh Gandhi
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-lg"
                  textGradient
                >
                  CEO
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="grid font-Poppins justify-center items-center text-center">
            <Card className="w-96 ">
              <CardHeader floated={false} className="h-80">
                <img src={developer} />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Hitanshu Gandhi
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-lg"
                  textGradient
                >
                  Developer
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="grid font-Poppins justify-center items-center text-center">
            <Card className="w-96 ">
              <CardHeader floated={false} className="h-80">
                <img src={logistic} />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  Pravin Gangurde
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium text-lg"
                  textGradient
                >
                  Logistic Head
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
