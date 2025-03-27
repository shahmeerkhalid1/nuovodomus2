import React from "react";
import BannerTwo from "@/components/section/heroes/bannerOne";
import BannerOne from "@/components/section/heroes/bannerTwo";
import HeaderTwo from "@/components/header/headerTwo";
import Header from "@/components/preview/header";
import Banner from "@/components/preview/banner";
import Demos from "@/components/preview/demos";
import Footer from "@/components/footer";
import Home1 from "./home-1/page";
import Layout from "./home-1/layout";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Banner /> */}
      {/* <Demos /> */}
      {/* <Footer /> */}
      <Layout>
        <Home1 />
      </Layout>
    </>
  );
};

export default Home;
