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
      <section className="grid md:grid-cols-2 grid-cols-1 gap-6 p-6 md:mx-6">
        <div className="grid justify-center align-middle text-center">
          <h1 className="md:text-4xl text-3xl p-4 font-Roboto text-gray-800">About Us</h1>
          <p className="md:text-xl text-justify font-Poppins text-gray-700">
            We “JAYKEM ENTERPRISES” are a Sole Proprietorship based firm at
            Mumbai, Maharashtra, Established in the year 1996, engaged as the
            foremost Wholesaler and Manufacturer representative of Chemicals and
            Minerals. All these products are sourced from reliable manufacturers
            and that are tested as per the industry set standards. Our products
            are high in demand due to their premium quality and affordable
            prices. Furthermore, we ensure to timely deliver these products to
            our clients, through this we have gained a huge client base in the
            market. Logistics: Our logistics network from Bhiwandi is powerful
            and we promise delivery on time, also we can deliver material from our Manufacturer destination at Gujarat and Rajasthan.
          </p>
        </div>
        <div>
          <Lottie animationData={about1} loop={true} autoPlay={true} />
        </div>
      </section>

      {/* Part-2 */}
      <section className="grid md:grid-cols-2 grid-cols-1 gap-6 bg-[#f0f0f0] p-6 text-center">
        
        {/* Basic Information */}
        <div>
          <div className="flex justify-center items-center p-4 font-Poppins">
            <table className="text-center border-collapse border border-[#0f0f3f] table-auto w-full">
              <caption className="bg-blue-900 text-white rounded-t-lg py-2">
                <p className="text-center text-lg">Basic Information</p>
              </caption>
              {data.map((val, key) => (
                <tr key={key}>
                  <td className="border border-[#0f0f3f] p-4 text-left font-semibold">{val.name}</td>
                  <td className="border border-[#0f0f3f] p-4 text-left">{val.desc}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>

        {/* About Company */}
        <div>
          <div className="flex justify-center items-center p-4">
            <table className="text-center border-collapse border border-[#0f0f3f] table-auto w-full">
              <caption className="bg-blue-900 text-white rounded-t-lg py-2">
                <p className="text-center text-lg">About Company</p>
              </caption>
              <tbody>
                <tr>
                  <td className="border border-[#0f0f3f] p-4 text-left font-semibold">GST</td>
                  <td className="border border-[#0f0f3f] p-4 text-left">27AEMPG2849H1ZA</td>
                </tr>
                <tr>
                  <td className="border border-[#0f0f3f] p-4 text-left font-semibold">MSME</td>
                  <td className="border border-[#0f0f3f] p-4 text-left">UDHYAM-MH-17-0075985</td>
                </tr>
                <tr>
                  <td className="border border-[#0f0f3f] p-4 text-left font-semibold">Payment Mode</td>
                  <td className="border border-[#0f0f3f] p-4 text-left">
                    RTGS, NEFT, Cheque, DD, Bank Transfer, Online
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#0f0f3f] p-4 text-left font-semibold">Shipment Mode</td>
                  <td className="border border-[#0f0f3f] p-4 text-left">By Road/Ship</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Lottie
              animationData={about_transport}
              loop={true}
              autoPlay={true}
              className="h-[20rem] mx-auto mt-6"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
