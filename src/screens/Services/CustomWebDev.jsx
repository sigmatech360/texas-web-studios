import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import customWebDevBanner from "../../assets/images/customWebDevBanner.webp";

const CustomWebDev = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={customWebDevBanner}
        title="Custom Web Development With Detailed Processes"
        description="At Texas Web Studios, Our Team Works On Custom Web Development Services In Texas That Reflect Your Business Structure, Customer Journey, And Goals. We Combine Custom Design With Well-Researched And Planned Marketing Strategies To Ensure Your Site Works Exactly How You Need It To With A Consistent Flow Of Traffic, Leads, And Conversions."
        pageName="Services"
      />
    </DefaultLayout>
  );
};

export default CustomWebDev;
