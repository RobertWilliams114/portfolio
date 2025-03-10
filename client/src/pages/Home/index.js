import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import Organizations from "./Organizations";
import { useSelector } from "react-redux";
import "antd/dist/reset.css";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  console.log("PortfolioData in Home:", portfolioData);
  return (
    <div>
      <Header />
      {portfolioData ? (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Organizations />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      ) : (
        <div>Loading portfolio data...</div>
      )}
    </div>
  );
}

export default Home;
