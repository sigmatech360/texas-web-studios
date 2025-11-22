import React from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../../context/ModalContext';

const TransferSupport = () => {
     const { setShowModal } = useModal();
  return (
    <section className='transfer-support-sec'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="transfer-support-txt">
                        <h6 className='shorttop-head text-white'>Support & Maintenance</h6>
                        <h2 className='mainhead text-white'>Backing Up Your Digital Experience</h2>
                        <p>We offer support and maintenance till the end of your web development project. Starting from getting a domain name of your choice and never ending with web and server maintenance, we love to support our web partners within and beyond our limits.</p>
                        <p>Call us anytime and get the backup you deserve at Texas Web Studios.</p>
                        <button onClick={() => setShowModal(true)}>Get Support Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TransferSupport