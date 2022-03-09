import React from 'react'
import cartbg from '../../images/cartbdsingin.png'

// images

import proimage from '../../images/product image/keybord.jpg'
// style sheet

import '../../style/cartUserDetail.css'

const CartDetail = () => {
  return (
    <div className='user-cart-main-detail p-3 pt-5'>
        <div className='container-fluid'>
            <div className='row align-items-center rounded bg-white shadow p-4 p-sm-5 mb-4'>
                <div className='col-12 col-md-4 col-lg-4'>
                    <img src={cartbg} alt='cart-bg-img' className='img-fluid' />
                </div>
                <div className='col-12 col-md-8 col-lg-8 mt-sm-2 ps-5'>
                    <h2 className='m-0 lh-1 fw-bold'>Your Amazon Cart is empty</h2>
                    <p>Shop today's deals</p>
                    <div className='user-cart-btn'>
                        <button className='me-3 bg-warning rounded border p-1 '>Sign in to your account</button>
                        <button className='bg-white rounded border p-1'>Sign up now</button>
                    </div>
                </div>
            </div>
            <div className='row bg-white p-5'>
                {/* card start */}
                <div className='col-sm-4 col-md-6 col-lg-3 mt-3'>
                    <div className='border border-2 p-2'>
                        <img src={proimage} alt='saved product from later' className='img-fluid w-100 h-75' />
                        <div className='p-3'>
                            <h4>Samsung BAR Plus 128GB - 300MB/s USB 3.1 Flash Driv…</h4>
                            <p className='fw-bold card-para'>See other <span className='text-primary'>new offers </span>from <span>$28.81</span></p>
                        </div>
                    </div>
                </div>
                {/* card end */}

                {/* card start */}
                <div className='col-sm-4 col-md-6 col-lg-3 mt-3'>
                    <div className='border border-2 p-2'>
                        <img src={proimage} alt='saved product from later' className='img-fluid w-100 h-75' />
                        <div className='p-3'>
                            <h4>Samsung BAR Plus 128GB - 300MB/s USB 3.1 Flash Driv…</h4>
                            <p className='fw-bold card-para'>See other <span className='text-primary'>new offers </span>from <span>$28.81</span></p>
                        </div>
                    </div>
                </div>
                {/* card end */}

                {/* card start */}
                <div className='col-sm-4 col-md-6 col-lg-3 mt-3'>
                    <div className='border border-2 p-2'>
                        <img src={proimage} alt='saved product from later' className='img-fluid w-100 h-75' />
                        <div className='p-3'>
                            <h4>Samsung BAR Plus 128GB - 300MB/s USB 3.1 Flash Driv…</h4>
                            <p className='fw-bold card-para'>See other <span className='text-primary'>new offers </span>from <span>$28.81</span></p>
                        </div>
                    </div>
                </div>
                {/* card end */}

                {/* card start */}
                <div className='col-sm-4 col-md-6 col-lg-3 mt-3'>
                    <div className='border border-2 p-2'>
                        <img src={proimage} alt='saved product from later' className='img-fluid w-100 h-75' />
                        <div className='p-3'>
                            <h4>Samsung BAR Plus 128GB - 300MB/s USB 3.1 Flash Driv…</h4>
                            <p className='fw-bold card-para'>See other <span className='text-primary'>new offers </span>from <span>$28.81</span></p>
                        </div>
                    </div>
                </div>
                {/* card end */}
                
            </div>
        </div>
    </div>
  )
}

export default CartDetail