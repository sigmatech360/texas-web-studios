import React from 'react'
import "./style.css"
import { IoIosArrowRoundForward } from 'react-icons/io'

const BookCallSec = (props) => {
  return (
    <section className='bookCallSec sec-padding'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bookCallContent">
                        <h3 className='bookCallTitle'>{props.title}</h3>
                        <button className='theme-btn theme-btn-white icon-btn'>{props.btnText} <IoIosArrowRoundForward /></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookCallSec