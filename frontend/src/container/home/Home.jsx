import React, { useEffect } from "react";
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

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Header />
      <Header2 />

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center text-center py-12 md:py-20 bg-gradient-to-r from-blue-100 to-white">
        <div className="p-4">
          <Lottie animationData={Chemistry} loop autoPlay />
        </div>
        <div>
          <h1
            className="text-2xl md:text-5xl font-bold font-Roboto my-4"
            data-aos="zoom-in"
          >
            Empowering Industry Through Chemical Excellence
          </h1>
          <p className="text-sm md:text-xl font-Poppins p-2 md:p-4 bg-orange-200 inline-block rounded-3xl">
            Your Trusted Source for Quality Chemical Solutions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 font-Roboto">
          Features
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 px-4">
          {[
            { src: quality, label: "Quality Product" },
            { src: delivery, label: "Fast & On-Time Delivery" },
            { src: flask, label: "Premium Grade" },
            { src: service, label: "Customer Service" },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <img
                src={feature.src}
                alt={feature.label}
                className="h-20 mx-auto"
              />
              <h3 className="mt-4 font-medium text-lg">{feature.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Most Selling Products Section */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 font-Roboto">
          Most Selling Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:px-24">
          {[
            {
              link: "/product/calciumchloride",
              img: cacl2,
              name: "Calcium Chloride",
              specs: "Used in the pulp and paper industry as a coagulant.",
            },
            {
              link: "/product/magnesiumcarbonate",
              img: mgco3,
              name: "Magnesium Carbonate",
              specs: "An inorganic salt used as a fertilizer and antacid.",
            },
            {
              link: "/product/quicklime",
              img: ql,
              name: "Quick Lime",
              specs:
                "Essential in manufacturing iron, steel, paper, and porcelain.",
            },
          ].map((product, index) => (
            <Link to={product.link} key={index}>
              <CardH
                img={product.img}
                name={product.name}
                specs={product.specs}
              />
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/product">
            <button className="px-6 py-2 text-blue-600 font-medium text-lg border border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 font-Roboto">
          Read What Others Say
        </h2>
        <div className="grid grid-cols-1 px-10 md:px-0 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
          {[
            {
              name: "Varun Joshi",
              desc: "Jaykem Enterprises delivers both quality and affordability. Highly recommended!",
            },
            {
              name: "Raghav Deshmukh",
              desc: "Superb quality and affordability. My top recommendation for quality chemicals.",
            },
            {
              name: "Rohan Bhat",
              desc: "The balance of excellence and reasonable pricing exceeded my expectations.",
            },
          ].map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              desc={testimonial.desc}
            />
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 underline font-Roboto">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: ceopic, name: "Kalpesh Gandhi", role: "CEO" },
            { img: developer, name: "Hitanshu Gandhi", role: "Developer" },
            { img: logistic, name: "Pravin Gangurde", role: "Logistic Head" },
          ].map((team, index) => (
            <Card key={index} className="w-80 mx-auto">
              <CardHeader floated={false} className="h-64">
                <img
                  src={team.img}
                  alt={team.name}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="font-medium mb-2">
                  {team.name}
                </Typography>
                <Typography>{team.role}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
