import React from 'react'
import "./style.css"
import { IoIosArrowRoundForward } from 'react-icons/io'

const BookCallSec = () => {
  return (
    <section className='bookCallSec sec-padding'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bookCallContent">
                        <h3 className='bookCallTitle'>Let’s Discuss Your Business Goals.</h3>
                        <button className='theme-btn theme-btn-white icon-btn'>Book A Call <IoIosArrowRoundForward /></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookCallSec