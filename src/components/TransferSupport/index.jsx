import React from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../../context/ModalContext';

const TransferSupport = ({ 
  shortTopHead, 
  mainHead, 
  paraOne, 
  paraTwo, 
  buttonText,
  TransportSecClass
}) => {

  const { setShowModal } = useModal();

  return (
    <section className={TransportSecClass || 'transfer-support-sec'}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="transfer-support-txt">
              <h6 className='shorttop-head text-white'>{shortTopHead}</h6>
              <h2 className='mainhead text-white'>{mainHead}</h2>
              <p>{paraOne}</p>
              <p>{paraTwo}</p>
              <button onClick={() => setShowModal(true)}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransferSupport
