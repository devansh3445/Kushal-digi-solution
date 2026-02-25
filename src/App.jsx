import React from "react";
import ErrorBoundary from "./error/ErrorBoundary";

import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Testimonials from "./Pages/Testimonials";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Tcontent from "./components/Tcontent";
import Consultant from "./components/Consultant";
import Footer from "./components/Footer";


const App = () => {
  return (
    <ErrorBoundary>

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <Tcontent />
      <Consultant />

      <section id="contact">
        <ContactUs />
      </section>

      <Footer />


    </ErrorBoundary>
  );
};

export default App;