import Direction from "@component/components/direction";
import Footer from "@component/components/footer";
import Navbar from "@component/components/navbar";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="sm:py-5 md:py-8 sm:px-7 md:px-12 lg:px-20">
        <Navbar />
      </div>
      <div className="2xl:container mx-auto sm:py-10 md:py-14 sm:px-7 md:px-12 lg:px-20">
        <Direction
          isEven={true}
          title="Our Mission"
          paragraph="Our mission is to transform lives and communities through education and technology. We are committed to providing accessible and high-quality education to individuals around the world. By bridging the digital divide and offering innovative learning solutions, we empower people to reach their full potential and build a brighter future."
        />
        <Direction
          isEven={false}
          title="Our Values"
          paragraph="Our core values guide everything we do. Integrity is at the heart of our operations, and we believe in honesty, transparency, and ethical conduct. Excellence is our standard, and we continuously strive for improvement and innovation. Teamwork is our strength, and we collaborate with passion and respect. Customer satisfaction is our priority, and we work tirelessly to meet and exceed our clients' expectations, ensuring their success and satisfaction."
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
