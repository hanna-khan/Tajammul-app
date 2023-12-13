import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PolicyBusiness = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* privacy-policy-business */}
      <div className="container mx-[2rem] relative top-[8rem]">
       <div>
       <h2>Privacy Policy Tajammul Business</h2>
        <h3>Effective Date: 12th December 2023</h3>
        <p>
          Thank you for using Tajammul, a dual mobile application designed to
          cater to both customers and businesses. This Privacy Policy outlines
          how we collect, use, disclose, and safeguard your information when you
          use our mobile application. By accessing or using Tajammul, you agree
          to the terms of this Privacy Policy.
        </p>
       </div>
       <div className="list">
        <ol type="1" className="bold">
        Information We Collect
        </ol>
       </div>
      </div>
      <Footer />
    </>
  );
};

export default PolicyBusiness;
