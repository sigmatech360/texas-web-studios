import React from 'react'
import ReactHelmet from '../../components/ReactHelmet';
import DefaultLayout from '../../components/DefaultLayout';


const webUrl = import.meta.env.VITE_WEB_URL;

const CaseStudy1 = () => {

    
  return (
    
    <>
       <ReactHelmet
        title="Laravel web and application development in Texas"
        description="Discover expert Laravel development in Dallas, Texas. At Texas Web Studios, we build secure, scalable, and custom Laravel backend solutions for businesses"
        url={`${webUrl}/laravel-development-dallas`}
      />

      
      <DefaultLayout>

      </DefaultLayout>
    </>
  )
}

export default CaseStudy1
