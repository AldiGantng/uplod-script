import React from "react";
import LoaderHome from "../componenst/loaderHome/LoaderHome";
import Hero from "../componenst/hero/Hero";
import About from "../componenst/about/About";
import Navbar from "../componenst/navbar/Navbar";
import Work from "../componenst/work/Work";
import Service from "../componenst/service/Service";
import Footer from "../componenst/footer/Footer";

const Home = () => {
  return (
    <div>
      <LoaderHome />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
