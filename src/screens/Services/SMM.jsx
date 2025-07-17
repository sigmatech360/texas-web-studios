import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import smmBanner from "../../assets/images/smmBanner.webp";

const SMM = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={smmBanner}
        title="Social Media Marketing"
        description="Build Buzz, Grow Engagement, And Turn Followers Into Loyal Customers Through Strategic And Creative Social Media Marketing In Texas."
        pageName="Services"
      />
    </DefaultLayout>
  );
};

export default SMM;
