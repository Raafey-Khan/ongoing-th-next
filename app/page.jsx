"use client";
import Image from "next/image";
import Script from 'next/script';
import { useEffect, useState } from 'react';
import 'flowbite';

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
          gap: '2px',
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
              src="images/useef.png"
              alt=""
              className="Main-content-header"
            />
          </div>
        </div>
        <div className="w-full md:w-1/4 pr-4 pl-4 justify-center items-center">
          <div className="d-3  flex justify-center items-center gap-3">
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
        

{/* <!-- drawer init and show --> */}
<div class="text-center">
   <button class="text-white    font-medium rounded-lg text-sm px-5 py-2.5 " type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   <i class="fa-solid fa-bars text-3xl"></i>
   </button>
</div>

{/* <!-- drawer component --> */}
<div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
    </button>
  <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
      </ul>
   </div>
</div>

      </div>
    </div>
    <div className="second">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item wrapper bg-[url('../public/images/hero-img.png')] carousel-image-control active">
            <div className="carousel-inner-txt">
              <p className="year-carousel-txt">2016</p>
              <p className="wheather-carousel-txt uppercase">Summer</p>
              <p className="month-speciality-text uppercase">collection</p>
            </div>
          </div>
          <div className="carousel-item wrapper-1 bg-[url('../public/images/hero-img.png')]">
            <div className="carousel-inner-txt">
              <p className="year-carousel-txt">2016</p>
              <p className="wheather-carousel-txt uppercase">Summer</p>
              <p className="month-speciality-text uppercase">collection</p>
            </div>
          </div>
          <div className="carousel-item wrapper-2 bg-[url('../public/images/hero-img.png')]">
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
    <div className="Recently-Viewed-Flex-top container mx-auto sm:px-4 flex justify-between border-solid border border-black items-center mb-2 ">
    <p className="uppercase">Recently Viewed</p>
    <u className="uppercase">View all</u>
  </div>
      <div className="w-full md:w-1/4 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex justify-center ">
        <div className="relative flex flex-col min-w-0 rounded break-words bor bg-white " style={{ width: "18rem" }}>
          <img src="images/box-img.png" className="w-full " alt="..." />
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
 
 <div className="flex justify-center mt-10">
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="unique-tablist-1" data-tabs-toggle="#unique-tab-content-1" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab-1" data-tabs-target="#unique-profile-1" type="button" role="tab" aria-controls="profile-1" aria-selected="false">Profile</button>
      </li>
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab-1" data-tabs-target="#unique-dashboard-1" type="button" role="tab" aria-controls="dashboard-1" aria-selected="false">Dashboard</button>
      </li>
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab-1" data-tabs-target="#unique-settings-1" type="button" role="tab" aria-controls="settings-1" aria-selected="false">Settings</button>
      </li>
      <li role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab-1" data-tabs-target="#unique-contacts-1" type="button" role="tab" aria-controls="contacts-1" aria-selected="false">Contacts</button>
      </li>
    </ul>
  </div>
</div>
<div id="unique-tab-content-1">
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="unique-profile-1" role="tabpanel" aria-labelledby="profile-tab-1">
    {/* first content goes here */}

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
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="unique-dashboard-1" role="tabpanel" aria-labelledby="dashboard-tab-1">
    {/* second content goes here */}

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
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="unique-settings-1" role="tabpanel" aria-labelledby="settings-tab-1">
    {/* Third content goes here */}

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
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="unique-contacts-1" role="tabpanel" aria-labelledby="contacts-tab-1">
    {/* Fourth content goes here */}

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
</div>

<div className="flex justify-center">
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
      </li>
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
      </li>
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
      </li>
      <li role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
      </li>
    </ul>
  </div>
</div>
<div id="default-styled-tab-content">
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-styled-tab">
    {/* first content goes here */}
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
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-styled-tab">
    {/* second content goes here */}

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
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-styled-tab">
    {/* Third content goes here */}

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
  <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-styled-tab">
    {/* Fourth content goes here */}

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
</div>
  <div className="view-button container mx-auto sm:px-4 text-center">
    <button className="view-btn uppercase border border-black">view all</button>
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
          <div className="spotlight-card-1 bg-[url('../public/images/Spotlight-1.png')]">
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
          <div className="spotlight-card-2 bg-[url('../public/images/Spotlight-2.png')]">
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
          <div className="spotlight-card-3 bg-[url('../public/images/Spotlight-3.png')]">
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
          <div className="spotlight-card-4 bg-[url('../public/images/Spotlight-4.png')]">
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



   
    
=

      {/* Swiper Slider Initialization */}
      
      </>
  );
}
