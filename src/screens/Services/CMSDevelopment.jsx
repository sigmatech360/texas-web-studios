import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import cmsDevBanner from "../../assets/images/cmsDevBanner.webp";

const CMSDevelopment = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={cmsDevBanner}
        title="CMS Development"
        description="Powerful And Intuitive CMS Website Development For Businesses That Demand Growth, Performance, And Complete Control."
        pageName="Services"
      />
    </DefaultLayout>
  );
};

export default CMSDevelopment;
