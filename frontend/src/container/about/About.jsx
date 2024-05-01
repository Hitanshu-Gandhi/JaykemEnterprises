import React from "react";
import about1 from "../../assets/json/about1.json";
import Lottie from "lottie-react";
import Header from "../../components/navbar/Header";
import Header2 from "../../components/navbar/Header2";
import Footer from "../../components/footer/Footer";
import about_transport from "../../assets/json/about_transport.json";

const About = () => {
  const data = [
    { name: "Nature of Business", desc: "Dealer in Chemicals and Minerals" },
    {
      name: "Additional Business",
      desc: "Wholesale, Import and Export",
    },
    { name: "Company CEO", desc: "Kalpesh Gandhi" },
    {
      name: "Registered Address",
      desc: "202, Leela Park, Dahanukarwadi, M.G. Road, Kandivali West, Mumbai- 400067, Maharashtra, India",
    },
    { name: "Total Number of Employees", desc: "Upto 10 People" },
    { name: "Year of Establishment", desc: "1996" },
    { name: "Legal Status of Firm", desc: "Individual - Proprietor" },
    { name: "Annual Turnover", desc: "Rs. 2 - 5 Crore" },
  ];
  return (
    <div className="bg-[#f8f7f4]">
      <Header />
      <Header2 />
      {/* Part-1 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-6 md:mx-6">
        <div className="grid justify-center align-middle text-center">
          <h1 className="md:text-4xl text-3xl p-4 font-Roboto">About Us</h1>
          <p className="md:text-xl text-justify font-Poppins">
            We “JAYKEM ENTERPRISES” are a Sole Proprietorship based firm at
            Mumbai, Maharashtra, Established in the year 1996, engaged as the
            foremost Wholesaler and Manufacturer representative of Chemicals and
            Minerals. All these products are sourced from reliable manufacturers
            and that are tested as per the industry set standards. Our products
            are high in demand due to their premium quality and affordable
            prices. Furthermore, we ensure to timely deliver these products to
            our clients, through this we have gained a huge clients base in the
            market. Logistics: Our logistics network from Bhiwandi is powerful
            and we promise for delivery in time also we can deliver material
            from our Manufacturer destination at Gujarat and Rajasthan.
          </p>
        </div>
        <div>
          <Lottie animationData={about1} loop={true} autoPlay={true} />
        </div>
      </div>

      {/* Part-2 */}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 bg-[#f0f0f0] p-6 text-center">
        {/* Basic Information */}
        <div>
          <div className=" flex justify-center items-center p-4 font-Poppins">
            <table className=" text-center border-collapse border border-[#0f0f3f] table-auto">
              <caption className=" bg-blue-900 text-white rounded-t-lg">
                <p className=" text-center p-2 ">Basic Information</p>
              </caption>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td className="border border-[#0f0f3f] p-6">{val.name}</td>
                    <td className="border border-[#0f0f3f] p-6">{val.desc}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>

        {/* About Company */}
        <div>
          <div className=" flex justify-center items-center p-4">
            <table className=" text-center border-collapse border border-[#0f0f3f] table-auto">
              <caption className=" bg-blue-900 text-white rounded-t-lg">
                <p className=" text-center p-2">About Company</p>
              </caption>
              <tbody className=" rounded-b-lg">
                <tr>
                  <td className="border border-[#0f0f3f] p-6">GST</td>
                  <td className="border border-[#0f0f3f] p-6">
                    27AEMPG2849H1ZA
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#0f0f3f] p-6">MSME</td>
                  <td className="border border-[#0f0f3f] p-6">
                    UDHYAM-MH-17-0075985
                  </td>
                </tr>

                <tr>
                  <td className="border border-[#0f0f3f] p-6">Payment Mode</td>
                  <td className="border border-[#0f0f3f] p-6">
                    RTGS, NEFT, Cheque, DD, Bank Transfer, Online
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#0f0f3f] p-6">Shipment Mode</td>
                  <td className="border border-[#0f0f3f] p-6">By Road/Ship</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Lottie
              animationData={about_transport}
              loop={true}
              autoPlay={true}
              className=" h-[20rem]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
