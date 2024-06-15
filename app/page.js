"use client";
import Image from "next/image";
import Script from 'next/script';
import { useEffect, useState } from 'react';


export default function Home() {

  const [activeTab, setActiveTab] = useState('home');
 
  useEffect(() => {
 
    if (typeof window !== 'undefined') {
      const loadSwiper = () => {
        const Swiper = window.Swiper;
        new Swiper('.tranding-slider', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          loop: true,
          slidesPerView: 3,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          on: {
            init: function () {
              this.slides.forEach((slide) => {
                slide.style.opacity = slide.classList.contains('swiper-slide-active')
                  ? '1'
                  : '0.5';
              });
            },
            slideChangeTransitionEnd: function () {
              this.slides.forEach((slide) => {
                slide.style.opacity = slide.classList.contains('swiper-slide-active')
                  ? '1'
                  : '0.5';
              });
            },
          },
        });
      };

      if (window.Swiper) {
        loadSwiper();
      } else {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/swiper@8/swiper-bundle.min.js';
        script.onload = loadSwiper;
        document.body.appendChild(script);
      }
    }
  }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadSplide = () => {
        const Splide = window.Splide;
        new Splide('.splide', {
          type: 'loop',
          perPage: 6,
          perMove: 1,
          gap: '2rem',
          autoplay: true,
          interval: 2000, // Adjust the interval as needed (in milliseconds)
          pauseOnHover: false,
          pauseOnFocus: false,
          breakpoints: {
            640: {
              perPage: 2,
              gap: '.7rem',
            },
            480: {
              perPage: 1,
              gap: '.7rem',
            },
          },
          arrows: true,
          arrowPath: '',
          classes: {
            prev: 'splide__arrow--prev fa-solid fa-arrow-left',
            next: 'splide__arrow--next fa-solid fa-arrow-right',
          },
        }).mount();
      };

      if (window.Splide) {
        loadSplide();
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.9/dist/js/splide.min.js';
        script.onload = loadSplide;
        document.body.appendChild(script);
      }
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Function to update activeTab state
  };


  return (
    
  
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Third Culture</title>
  
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
  />
  <div className="new-testing-tag">
    <span>
      {" "}
      <i className="fa-solid fa-arrow-right lowercase">
        {" "}
        1 of 4 <i className="fa-solid fa-arrow-left" />
      </i>{" "}
    </span>
  </div>
  {/* Sticky navbar section */}
  <div className="sticky-navbar-section w-full text-center">
    <span className="sticky-navbar-content">
      FLAT 10% OFF ON YOUR 1ST PURCHASE <u>SHOP NOW</u>{" "}
    </span>
  </div>
  {/* Aside navbar  */}
  <nav className="navbarr">
    <div className="nav-container w-full flex justify-content-evenly items-center">
      <div className="flex flex-wrap  spread items-center ">
        <div className="w-full md:w-1/4 pr-4 pl-4 flex justify-center items-center">
          <div className="d-1 uppercase">
            <span className="Men">Men</span>
           
          </div>
        </div>
        <div className="w-full md:w-1/2 pr-4 pl-4 flex justify-center items-center">
          <div className="d-2">
            <img
              src="images/Third-culture-rechanged-logo.png"
              alt=""
              className="Main-content-header"
            />
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4 justify-center items-center">
          <div className="d-3 ">
            <i className="fa-solid fa-magnifying-glass" />
            <i className="fa-solid fa-user" />
            <span className="login-txt">Login</span>
            <i className="fa-solid fa-cart-shopping" />
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/* Hero Image under aside */}
  <div className="hero-flex-containerr flex">
    <div className="first">
      <div className="temp-hamburg">
        <nav className="relative flex flex-wrap items-center content-between py-3 px-4 wrap text-black">
          <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
            <button
              className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded custom-focus"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="px-5 py-1 border border-gray-600 rounded" />
            </button>
            <div
              className="offcanvas offcanvas-start text-bg-white"
              tabIndex={-1}
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Dark offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="flex flex-wrap list-reset pl-0 mb-0 justify-end flex-grow-1 pe-3">
                  <li className="">
                    <a className="inline-block py-2 px-4 no-underline active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="">
                    <a className="inline-block py-2 px-4 no-underline" href="#">
                      Link
                    </a>
                  </li>
                  <li className=" relative">
                    <a
                      className="inline-block py-2 px-4 no-underline  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded dropdown-menu-dark">
                      <li>
                        <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="h-0 my-2 overflow-hidden border-t-1 border-gray-300" />
                      </li>
                      <li>
                        <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="flex mt-3" role="search">
                  <input
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:green-600" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className="second">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item wrapper carousel-image-control active">
            <div className="carousel-inner-txt">
              <p className="year-carousel-txt">2016</p>
              <p className="wheather-carousel-txt uppercase">Summer</p>
              <p className="month-speciality-text uppercase">collection</p>
            </div>
          </div>
          <div className="carousel-item wrapper-1">
            <div className="carousel-inner-txt">
              <p className="year-carousel-txt">2016</p>
              <p className="wheather-carousel-txt uppercase">Summer</p>
              <p className="month-speciality-text uppercase">collection</p>
            </div>
          </div>
          <div className="carousel-item wrapper-2">
            <div className="carousel-inner-txt">
              <p className="year-carousel-txt">2016</p>
              <p className="wheather-carousel-txt uppercase">Summer</p>
              <p className="month-speciality-text uppercase">collection</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  {/* Recently Viewed Section */}
  
  <div className="Recently-Viewed-Flex-Boxes container mx-auto sm:px-4 flex justify-center items-center  mt-6 ">
    <div className="flex flex-wrap ">
    <div className="Recently-Viewed-Flex-top container mx-auto sm:px-4 flex ">
    <p className="uppercase">Recently Viewed</p>
    <u className="uppercase">View all</u>
  </div>
      <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
        <div className="relative flex flex-col min-w-0 rounded break-words bor bg-white " style={{ width: "18rem" }}>
          <img src="images/box-img.png" className="w-full " alt="..." />
          <div className="flex-auto">
            <h5 className="mb-3 uppercase text-center">
              white shirt
            </h5>
            <p className="mb-0 text-center">
              <span className="line-tho">1305</span>{" "}
              <span className="price">₹185</span>{" "}
              <span className="percent-off">11%</span>
            </p>
            <p className="text-center">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
        <div className="relative flex flex-col min-w-0  break-words bg-white " style={{ width: "18rem" }}>
          <img src="images/box-imgg.png" className="w-full " alt="..." />
          <div className="flex-auto p-6">
            <h5 className="mb-3 uppercase text-center">
              white shirt
            </h5>
            <p className="mb-0 text-center">
              <span className="line-tho">1305</span>{" "}
              <span className="price">₹185</span>{" "}
              <span className="percent-off">11%</span>
            </p>
            <p className="text-center">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
        <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
          <img src="images/box-images.png" className="w-full " alt="..." />
          <div className="flex-auto p-6">
            <h5 className="mb-3 uppercase text-center">
              white shirt
            </h5>
            <p className="mb-0 text-center">
              <span className="line-tho">1305</span>{" "}
              <span className="price">₹185</span>{" "}
              <span className="percent-off">11%</span>
            </p>
            <p className="text-center">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
        <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
          <img
            src="images/box-imagess.png"
            className="w-full"
            alt="..."
          />
          <div className="flex-auto p-6">
            <h5 className="mb-3 uppercase text-center">
              white shirt
            </h5>
            <p className="mb-0 text-center">
              <span className="line-tho">1305</span>{" "}
              <span className="price">₹185</span>{" "}
              <span className="percent-off">11%</span>
            </p>
            <p className="text-center">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Shop By Collection Eclipse Slider */}
  <div className="Shop-By-Collection-Container container mx-auto sm:px-4">
    <p className="heading-txt text-center">Shop By Collection</p>
    <div className="splide container mx-auto sm:px-4">
      <div className="splide__track">
        <div className="splide__list">
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round1.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round2.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round3.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round-4.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round-5.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round6.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round1.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
          <div className="splide__slide">
            <div className="img_box">
              <img src="images/round2.png" alt="" />
            </div>
            <p className="Shop-By-Collection-boxes-p text-center">
              helo worlld
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* splide js cdn */}
  </div>
  {/* Banner Image On hover effect container */}
  <div className="Bannner-Image-Container container mx-auto sm:px-4">
    <img src="images/banner.png" alt="" />
  </div>
  {/* New Collections and Trending Section */}
  {/* <div class="new-collections text-center container mx-auto sm:px-4">
  <span class="new-collections-active uppercase active">
    new collection
  </span>
  <span class="new-collections-trending-txt uppercase">
    Trending
  </span>
     </div> */}
  <ul className="flex flex-wrap list-none pl-0 mb-0 border-b border-gray-200 justify-center items-center my-4 gap-4 p-6" role="tablist">
        <li role="presentation">
          <button
            className={`inline-block py-2 px-4 no-underline uppercase ${activeTab === 'home' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => handleTabClick('home')}
            type="button"
            role="tab"
            aria-selected={activeTab === 'home'}
          >
            New Collection
          </button>
        </li>
        <li role="presentation">
          <button
            className={`inline-block py-2 px-4 no-underline uppercase ${activeTab === 'trending' ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => handleTabClick('trending')}
            type="button"
            role="tab"
            aria-selected={activeTab === 'trending'}
          >
            Trending
          </button>
        </li>
      </ul>

      <div className="tab-content container mx-auto sm:px-4 mt-3">
        <div className={`tab-pane ${activeTab === 'home' ? 'block' : 'hidden'}`} role="tabpanel">
          {/* Home content cards */}
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 sm:w-1/2 p-4 flex justify-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white" style={{ width: '18rem' }}>
                <Image src="/images/box-img.png" className="w-full" alt="..." width={288} height={288} />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">White Shirt</h5>
                  <p className="mb-0 text-center">
                    <span className="line-through">1305</span> <span className="price">₹185</span> <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center">S M L XL <span>XXL</span></p>
                </div>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
        
        <div className={`tab-pane ${activeTab === 'trending' ? 'block' : 'hidden'}`} role="tabpanel">
          {/* Trending content cards */}
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 sm:w-1/2 p-4 flex justify-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white" style={{ width: '18rem' }}>
                <Image src="/images/box-imgg.png" className="w-full" alt="..." width={288} height={288} />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">Polo T-Shirt</h5>
                  <p className="mb-0 text-center">
                    <span className="line-through">1305</span> <span className="price">₹185</span> <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center">S M L XL <span>XXL</span></p>
                </div>
              </div>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
  {/* Different Product Section */}
  <div className="Products-Container-Cards container mx-auto sm:px-4">
    <ul
      className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 flex justify-center items-center p-6 gap-4 border-0"
      id="myTab2"
      role="tablist"
    >
      <li className="" role="presentation">
        <button
          className="inline-block py-2 px-4 no-underline uppercase active"
          id="home-tab2"
          data-bs-toggle="tab"
          data-bs-target="#home2"
          type="button"
          role="tab"
          aria-controls="home2"
          aria-selected="true"
        >
          Shirt
        </button>
      </li>
      <li className="" role="presentation">
        <button
          className="inline-block py-2 px-4 no-underline uppercase"
          id="profile-tab2"
          data-bs-toggle="tab"
          data-bs-target="#profile2"
          type="button"
          role="tab"
          aria-controls="profile2"
          aria-selected="false"
        >
          T-shirt
        </button>
      </li>
      <li className="" role="presentation">
        <button
          className="inline-block py-2 px-4 no-underline uppercase"
          id="contact-tab1"
          data-bs-toggle="tab"
          data-bs-target="#contact1"
          type="button"
          role="tab"
          aria-controls="contact1"
          aria-selected="false"
        >
          Jeans
        </button>
      </li>
      <li className="" role="presentation">
        <button
          className="inline-block py-2 px-4 no-underline uppercase"
          id="contact-tab2"
          data-bs-toggle="tab"
          data-bs-target="#contact2"
          type="button"
          role="tab"
          aria-controls="contact2"
          aria-selected="false"
        >
          Oversized
        </button>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent2">
      <div
        className="tab-pane opacity-0 opacity-100 block active"
        id="home2"
        role="tabpanel"
        aria-labelledby="home-tab2"
      >
        {/* Shirt content cards go here */}
        <div className="Recently-Viewed-Flex-Boxes Product-boxes container mx-auto sm:px-4 flex  mt-3 new-collection-contain">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-img.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    white shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-imgg.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    polo t-shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white" style={{ width: "18rem" }}>
                <img
                  src="images/box-images.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Jeans
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-imagess.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Pyjamas
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane opacity-0"
        id="profile2"
        role="tabpanel"
        aria-labelledby="profile-tab2"
      >
        {/* T-shirt content cards go here */}
        <div className="Recently-Viewed-Flex-Boxes Product-boxes container mx-auto sm:px-4 flex  mt-3 new-collection-contain">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-img.png"
                
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    white shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white" style={{ width: "18rem" }}>
                <img
                  src="images/box-imgg.png"
                  className="w-full rounded rounded-t"
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    polo t-shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-images.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Jeans
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white" style={{ width: "18rem" }}>
                <img
                  src="images/box-imagess.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Pyjamas
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane opacity-0"
        id="contact1"
        role="tabpanel"
        aria-labelledby="contact-tab1"
      >
        {/* Jeans content cards go here */}
        <div className="Recently-Viewed-Flex-Boxes Product-boxes container mx-auto sm:px-4 flex  mt-3 new-collection-contain">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words  bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-img.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    white shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-imgg.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    polo t-shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-images.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Jeans
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0  break-words  bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-imagess.png"
                  className="w-full"
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Pyjamas
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane opacity-0"
        id="contact2"
        role="tabpanel"
        aria-labelledby="contact-tab2"
      >
        {/* Oversized content cards go here */}
        <div className="Recently-Viewed-Flex-Boxes Product-boxes container mx-auto sm:px-4 flex  mt-3 new-collection-contain">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0  break-words bg-white" style={{ width: "18rem" }}>
                <img
                  src="images/box-img.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    white shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0  break-words  bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-imgg.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    polo t-shirt
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-images.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Jeans
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
              <div className="relative flex flex-col min-w-0 break-words bg-white " style={{ width: "18rem" }}>
                <img
                  src="images/box-imagess.png"
                  className="w-full "
                  alt="..."
                />
                <div className="flex-auto p-6">
                  <h5 className="mb-3 uppercase text-center">
                    Pyjamas
                  </h5>
                  <p className="mb-0 text-center">
                    <span className="line-tho">1305</span>{" "}
                    <span className="price">₹185</span>{" "}
                    <span className="percent-off">11%</span>
                  </p>
                  <p className="text-center letter">
                    S M L XL <span className="xll">XXL</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="view-button container mx-auto sm:px-4 text-center">
    <button className="view-btn uppercase">view all</button>
  </div>
  {/* Product Sale Image Section */}
  <div className="Product-Sale-Image-Container container mx-auto sm:px-4">
    <img src="images/discount.png" alt="" />
  </div>
  {/* Spotlight Section */}
  <div className="Spotlight-section container mx-auto sm:px-4">
    <div className="Spotlight-header-txt">
      <h3 className="uppercase text-center">tc spotlight on</h3>
    </div>
    <div className="Spotlight-Cards container mx-auto sm:px-4 flex justify-center items-center mt-3">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center">
          <div className="spotlight-card-1">
            .
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=y5Cm8b4pN-s"
            >
              <img src="images/play-solid (2) 2.png" alt="" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center">
          <div className="spotlight-card-2">
            .
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=y5Cm8b4pN-s"
            >
              <img src="images/play-solid (2) 2.png" alt="" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center">
          <div className="spotlight-card-3">
            .
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=y5Cm8b4pN-s"
            >
              <img src="images/play-solid (2) 2.png" alt="" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center">
          <div className="spotlight-card-4">
            .
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=y5Cm8b4pN-s"
            >
              <img src="images/play-solid (2) 2.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Customer Review and Testimonial Section */}
  <div className="Customer-Review-Testimonial-Container container mx-auto sm:px-4">
    <div className="crt-background-img">
      <div className="crt-content">
        <p className="review-txt uppercase">10k + review</p>
        <h4 className="customer-review uppercase">our customer review</h4>
        <img className="quotation-img" src="images/quote 1.png" alt="" />
        <div className="customer-review-txt">
          <p>
            I had a treatment done to my hair which made them really prone to
            hair fall. This hair treatment oil really worked. Just use it
            religiously and you will not be disappointed.
          </p>
        </div>
        <section id="tranding">
          <div className="container mx-auto sm:px-4" />
          <div className="container mx-auto sm:px-4">
            <div className="swiper tranding-slider">
              <div className="swiper-wrapper">
                {/* Slide-start */}
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="images/Ellipse-1.png" alt="Trending" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name uppercase">kanak jadaun</h2>
                    </div>
                  </div>
                </div>
                {/* Slide-end */}
                {/* Additional slides here */}
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="images/Ellipse 203.png" alt="Trending" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name uppercase">
                        shreya ghosle
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="images/Ellipse 204.png" alt="Trending" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name uppercase">
                        Emmy Anderson
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="images/Ellipse 206.png" alt="Trending" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name uppercase">
                        Emily jackson
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src="images/Ellipse 212.png" alt="Trending" />
                  </div>
                  <div className="tranding-slide-content">
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name uppercase">bela hadid</h2>
                    </div>
                  </div>
                </div>
                {/* Add more slides as needed */}
              </div>
              <div className="tranding-slider-control">
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </section>
        {/* JavaScript */}
      </div>
    </div>
  </div>
  {/* Footer Section */}
  <div className="background-rect">
    <footer className="culture-future-footer container mx-auto sm:px-4">
      <div className="about-footer-labels flex justify-center items-center">
        <div className="label1 ">
          <img src="images/award-solid (2) 1.png" alt="" />
          <div className="label1-abt">Premium Quality Products</div>
        </div>
        <div className="label2">
          <img src="images/shield-halved-solid 1.png" alt="" />
          <div className="label2-abt">Secure payment</div>
        </div>
        <div className="label3">
          <img src="images/rotate-left-solid (1) 1.png" alt="" />
          <div className="label3-abt">10 days return policy</div>
        </div>
      </div>
      <div className="second-last-footer-container flex justify-center items-center">
        <div className="foot-sub-txt-1">
          <img src="images/Third-Culture-Logo.png" alt="" />
          <div className="social-media-footer-logos">
            <img src="images/linkedin-in 1.png" alt="" className="linkedin" />
            <img src="images/instagram 1.png" alt="" className="instagram" />
            <img src="images/x-twitter 1.png" alt="" className="twitter" />
            <img src="images/x-twitter 1.png" alt="" className="facebook" />
          </div>
        </div>
        <div className="foot-sub-txt-2">
          <p>Get to know us</p>
          <ul>
            <li>Contact us</li>
            <li>Faqs</li>
            <li>blogs</li>
            <li>terms and condition</li>
          </ul>
        </div>
        <div className="foot-sub-txt-3">
          <p>Get to know us</p>
          <ul>
            <li>Contact us</li>
            <li>Faqs</li>
            <li>blogs</li>
            <li>terms and condition</li>
          </ul>
        </div>
        <div className="foot-sub-txt-4">
          <p>Get to know us</p>
          <ul>
            <li>Contact us</li>
            <li>Faqs</li>
            <li>blogs</li>
            <li>terms and condition</li>
          </ul>
        </div>
        <div className="foot-sub-txt-5 flex flex-wrap">
          <p>100% secure payment</p>
          <img
            src="images/1200px-Debit_Mastercard_logo 1.png"
            alt=""
            className="payment-logos"
          />
          <img
            src="images/Google_Pay_Logo 1.png"
            alt=""
            className="payment-logos"
          />
          <img
            src="images/Visa_Inc._logo 1.png"
            alt=""
            className="payment-logos"
          />
          <img src="images/PayPal 1 (1).png" alt="" className="payment-logos" />
        </div>
      </div>
      <p className="copy-write-text text-center">
        © Copyright 2024 - Third Culture Clothing Designed by Nexgeno
      </p>
    </footer>


    
  </div>
  {/* operation to be performed here */}
  {/* Font Awesomme Kit */}
  {/* Bootstrap CDN's and Popper */}
  {/* swiper slider scripts */}
  {/* Font Awesomme Kit */}
  {/* Bootstrap CDN's and Popper */}



   
    
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

      {/* Swiper */}
      <Script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></Script>

      {/* Font Awesome Kit */}
      <Script src="https://kit.fontawesome.com/f6c5bb05cf.js" crossorigin="anonymous"></Script>

      {/* Bootstrap CDN's and Popper */}
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></Script>

      {/* Swiper Slider Initialization */}
      
      </>
  );
}
