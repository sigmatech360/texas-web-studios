import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import seoBanner from "../../assets/images/seoBanner.webp";

const SEO = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={seoBanner}
        title="Top-Rated Search Engine Optimization Agency In Texas"
        description="At Texas Web Studios, We Ensure That Every Web Page We Create Is Visible On The Search Engines. We Combine Different SEO Strategies To Curate The One That Makes Your Business Rank High!"
        pageName="Services"
      />
    </DefaultLayout>
  );
};

export default SEO;
