import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Layout from "./components/Banner-Layout";
import TimeKeepers from "./components/TimeKeepers";
import CustomWatches from "./components/Custom-Watches";
import HighClassTime from "./components/HighClassTime";
import VideoSection from "./components/VideoSec";
import Testimonial from "./components/Testimonial";
import MultipleWatches from "./components/Multiple-Watches";
import Footer from "./components/Footer";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Layout />
      <TimeKeepers />
      <CustomWatches />
      <HighClassTime />
      <VideoSection />
      <Testimonial />
      <MultipleWatches />
      <Footer />
    </>
  );
}

export default App;
