import React from "react";
import DynamicFaqs from "../DynamicFaqs";

const LocationFaqs = ({ minihead, mainhead, secPara, faqsData }) => {
  return (
    <section className="location-faqs-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Section Heading */}
            <div className="location-faqs-txt text-center">
              {minihead && <h6>{minihead}</h6>}
              {mainhead && <h2>{mainhead}</h2>}
              {secPara && <p>{secPara}</p>}
            </div>
             <div className="row">
                <div className="col-lg-12">
                    <DynamicFaqs faqs={faqsData} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFaqs;
