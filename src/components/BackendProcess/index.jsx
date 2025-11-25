import React from 'react'

const BackendProcess = ({ shortTopHead, mainHead, cards, processCardclass }) => {
  return (
    <section className='backend-process-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="backend-process-head">
                        <h6 className='shorttop-head'>{shortTopHead}</h6>
                        <h2 className='mainhead'>{mainHead}</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="backend-process-cards">
                        {cards?.map((item, index) => (
                          <div className={`backend-process-card ${processCardclass}`} key={index}>
                              <h6>{item.number}</h6>
                              <h4>{item.title}</h4>
                              <p>{item.text}</p>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BackendProcess
