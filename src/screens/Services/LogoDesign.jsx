import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import logoDesignBanenr from "../../assets/images/logoDesignBanenr.webp";

const LogoDesign = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={logoDesignBanenr}
        title="Iconic Logo Designs For Iconic Brands"
        description="Your Brand’s First Impression Is Your Logo. And We Ensure That You Get It Right! With Iconic Logo Designs That Speak Your Stories For You, We Believe In Creating Identities With Our Custom Logo Designs In California."
        pageName="Services"
      />
    </DefaultLayout>
  );
};

export default LogoDesign;
