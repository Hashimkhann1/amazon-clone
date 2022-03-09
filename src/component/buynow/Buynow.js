import React from 'react'
import buyImage from '../../images/buyimage.gif'

const Buynow = () => {
  return (
    <div className='main-buy-now'>
        <div className='container-lg'>
          <div className='row'>
            <div className='col-md-8 col-lg-6 mb-5'>
              <img src={buyImage} alt='buy-now-img' className='img-fluid '/>
            </div>
            <h3 className='mt-2'>Select a shipping address</h3>
            <h4 className='fw-bold mt-1'>Add a new address</h4>
          </div>
          <div className='row'>
            
          </div>
        </div>
    </div>
  )
}

export default Buynow