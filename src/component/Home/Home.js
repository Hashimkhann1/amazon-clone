import React from 'react'
import '../../style/Home.css'
import amazonHome1 from '../../images/amazonHomeMain1.jpg'
import amazonHome2 from '../../images/amazonHomeMain2.jpg'
import amazonHome3 from '../../images/amazonHomeMain3.jpg'
import { Link } from 'react-router-dom'

// product list images

import headSet from '../../images/product image/headphone.jpg'
import keybord from '../../images/product image/keybord.jpg'
import mouse from '../../images/product image/mouse.jpg'
import chair from '../../images/product image/chair.jpg'
import laptop from '../../images/product image/laptop.jpg'
import xbox from '../../images/product image/xbox.jpg'
import baby from '../../images/product image/baby.jpg'
import toysGanmes from '../../images/product image/toys&games.jpg'
import TvPhoto from '../../images/product image/Tv.jpg'
import AmazonB from '../../images/product image/AmazonBasic.png'
import computer from '../../images/product image/computer.png'
import electronic from '../../images/product image/electronic.png'



const Home = () => {


  return (
    <div className='main-home'>
      <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active home-main-background-image ">
            <img src={amazonHome1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item home-main-background-image">
            <img src={amazonHome2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item home-main-background-image">
            <img src={amazonHome3} class="d-block w-100" alt="..." />
          </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
</div>

{/* product section start */}
<div className='home-product-lists'>
      <div className='container-xl product-main-list'>

        <div className='row'>

          {/* Product Start */}
          
          <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
            <div className='bg-white product-list-image-container p-1'>
            <p className='gameAcce fs-4 fw-bold ms-3'>Gaming accessories</p>
            <Link to={'/Product-Detailview'} className='text-decoration-none text-black'>
              <div className='flex-1'>
              <div className='product-1 mb-2 w-100'>
              <div className='image-1'>
                    <img src={headSet} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>Headphones</p>
                  </div>
                </div>

                <div className='product-2 w-100'>
                  <div className='image-1'>
                    <img src={keybord} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>Keybord</p>
                  </div>
                </div>
              </div>
              <div className='flex-2'>
              <div className='product-1 w-100'>
                <div className='image-1'>
                    <img src={mouse} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>Mouse</p>
                  </div>
                </div>

                <div className='product-2 w-100'>
                  <div className='image-1'>
                    <img src={chair} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>Gaming Chairs</p>
                  </div>
                </div>
              </div>
              </Link>
              <p className='lh-1 ms-2 see-shope'>See more</p>
            </div>
            </div>
          

          {/* Product end */}

           {/* Product Start */}
          
           <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
            <div className='bg-white product-list-image-container p-1'>
            <p className='fs-4 fw-bold ms-3'>Shop by Category</p>
            <Link to={'/Product-Detailview'} className='text-decoration-none text-black'>
              <div className='flex-1'>
              <div className='product-1 mb-2 w-100'>
              <div className='image-1'>
                    <img src={laptop} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>hashim khan</p>
                  </div>
                </div>

                <div className='product-2 w-100'>
                  <div className='image-1'>
                    <img src={xbox} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>hashim khan</p>
                  </div>
                </div>
              </div>
              <div className='flex-2'>
              <div className='product-1 w-100'>
                <div className='image-1'>
                    <img src={baby} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>hashim khan</p>
                  </div>
                </div>

                <div className='product-2 w-100'>
                  <div className='image-1'>
                    <img src={toysGanmes} alt='headset' className='img-fluid' />
                  </div>
                  <div className='product-text'>
                    <p className='m-2 lh-1 ms-3'>hashim khan</p>
                  </div>
                </div>
              </div>
              </Link>
              <p className='lh-1 ms-2 see-shope'>See more</p>
            </div>
            </div>
          

          {/* Product end */}

           {/* Product Start */}
          
           <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
            <div className='bg-white product-list-image-container p-1'>
            <p className='fs-4 fw-bold ms-3'>Find your ideal TV</p>
            <Link to={'/Product-Detailview'} className='text-decoration-none text-black'>
              <div className='product-full-img'>
                <div className='full-image'>
                    <img src={TvPhoto} alt='headset' />
                  </div>
              </div>
              </Link>
              <p className='lh-1 ms-2 see-shope'>See more</p>
            </div>
            </div>
          

          {/* Product end */}


           {/* Product Start */}


           <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
            <div className='bg-white product-list-image-container p-1'>
            <p className='fs-4 fw-bold ms-3'>AmazonBasics</p>
            <Link to={'/Product-Detailview'} className='text-decoration-none text-black'>
              <div className='product-full-img'>
                <div className='full-image'>
                    <img src={AmazonB} alt='headset' />
                  </div>
              </div>
              </Link>
              <p className='lh-1 ms-2 see-shope'>See more</p>
            </div>
            </div>

          {/* Product end */}


           {/* Product Start */}

           <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
            <div className='bg-white product-list-image-container p-1'>
            <p className='fs-4 fw-bold ms-3'>AmazonBasics</p>
            <Link to={'/Product-Detailview'} className='text-decoration-none text-black'>
              <div className='product-full-img'>
                <div className='full-image'>
                    <img src={computer} alt='headset' />
                  </div>
              </div>
              </Link>
              <p className='lh-1 ms-2 see-shope'>See more</p>
            </div>
            </div>

          {/* Product end */}


           {/* Product Start */}

           <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
            <div className='bg-white product-list-image-container p-1'>
            <p className='fs-4 fw-bold ms-3'>AmazonBasics</p>
            <Link to={'/Product-Detailview'} className='text-decoration-none text-black'>
              <div className='product-full-img'>
                <div className='full-image'>
                    <img src={electronic} alt='headset' />
                  </div>
              </div>
              </Link>
              <p className='lh-1 ms-2 see-shope'>See more</p>
            </div>
            </div>

          {/* Product end */}

           

        </div>
      </div>
    </div> 
{/* product section end */}

    </div>
  )
}

export default Home