import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import digitalMarketingBanner from "../../assets/images/digitalMarketingBanner.webp";


const DigitalMediaMarketing = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={digitalMarketingBanner}
        title="Digital Marketing"
        description="Show Up Exactly Where Your Audience Is, With A Data-Driven Digital Marketing Company In Texas That Drives Awareness, Boosts Engagement, And Fuels Growth."
        pageName="Services"
      />
    </DefaultLayout>
  );
};

export default DigitalMediaMarketing;
