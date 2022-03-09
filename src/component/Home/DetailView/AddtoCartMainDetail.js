import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../../../style/Addtocart.css'
import productview from '../../../images/product image/keybord.jpg'

const AddtoCartMainDetail = () => {

  const navigation = useNavigate('/')

  const goBack = () => {
    navigation('/Product-Detailview')
  }

  const userDetail = () => {
    navigation('/buynow')
  }

  return (
    <div className='container-xl mt-5'>

      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6 mb-5'>
          <div className='product-image-main'>
            <img src={productview} alt='productview' className='img-fluid w-100'/>
          </div>
        </div>

        <div className='col-md-12 col-lg-4 mt-5'>
          <div>
            <h3>SteelSeries Apex Pro Mechanical Gaming Keyboard – Adjustable Actuation Switches – World’s Fastest Mechanical Keyboard – OLED Smart Display – RGB Backlit</h3>
          <div className='product-rating'>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star-half text-warning"></i>
            </div>
          </div>

          <div className='princring-data'>
            <p className='lh-sm m-0'>List Price <span className='text-decoration-line-through'>$199.99</span></p>
            <p className='lh-sm m-0 ms-4'>Price <span className='span-text fs-5'>$149</span></p>
            <p className='lh-sm m-0'>Your Save <span className='span-text'>$50</span></p>
          </div>

          <div className='add-buy'>
            
          </div>
        </div>
        <div className='col-md-12 col-lg-2 border pt-2'>
          <div className='prise-btn'>
            <h3>$199</h3>
            <div className='add-to-cart-btn d-flex flex-column border-bottom'>
              <button className='cart-btn-1 p-2 mb-2 mt-4 rounded-pill bg-warning border border-warning'>Add to Cart</button>
              <button className='cart-btn-2 p-2 rounded-pill mb-3' onClick={userDetail}>Buy Now</button>
            </div>
            <div className='detail'>
              <p className='mt-3 w-25'>Detail</p>
              <p className='lh-sm'><span className='fw-bold'>Return policy</span>: Eligible for Return, Refund or Replacement</p>
            </div>
            <button className='border-1 w-100'>Add to List</button>
          </div>
        </div>
      </div>

      


    <div className='back-btn' onClick={goBack}>
      <i class="fas fa-arrow-left "></i>
      </div>
    </div>
  )
}

export default AddtoCartMainDetail