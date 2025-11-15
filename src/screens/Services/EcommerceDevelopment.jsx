import React from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import InnerBanner from '../../components/InnerBanner'  

const EcommerceDevelopment = () => {
  return (
    <>
    <DefaultLayout>
      <InnerBanner
          secClass="locate-wordpress-herobanner"
          leftCol="col-lg-6 order-lg-1 order-2"
          rightCol="col-lg-5 order-lg-2 order-1"
          //bgImage={mobileAppDevBanner}
          title="Mobile Apps Developed to Dominate in Dallas, Texas"
          description="We build the kind of apps that users can’t put down and competitors can’t keep up! At Texas Web Studios, every app begins with one question: how can it move your business forward? Our app development company in Dallas, TX, deploys sleek, scalable, and conversion-driven solutions that turn your ideas into measurable growth."
          serviceparatwo="Designed with precision, built for performance, and engineered to win, all for Dallas, in Dallas!"
          btntxt="Let’s Go Unstoppable"
        />
    </DefaultLayout>
    </>
  )
}

export default EcommerceDevelopment