import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import phone from './assets/landing-page/how-eazipay-works/onbrdng-2.png'
import BG from './assets/landing-page/how-eazipay-works/BG.png'
import mask1 from './assets/landing-page/how-eazipay-works/mask1.png'
import mask2 from './assets/landing-page/how-eazipay-works/mask2.png'
import maskImage from './assets/landing-page/download/image.png'
// import maskImageBg from './assets/landing-page/download/mask-image-bg.png'
// import maskImageFullBg from './assets/landing-page/download/mask-image-full-bg.png'
import apple from './assets/landing-page/download/apple.png'
import google from './assets/landing-page/download/google.png'
import kemi from './assets/landing-page/download/kemi.png'
import hero from './assets/landing-page/hero/hero.png'
import bg from './assets/landing-page/bg.png'

function App() {

  return (
    <>
      <Navbar />

      {/*HERO SECTION*/}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 py-40 xl:pl-40 lg:pl-20">
        <div className="order-2 xl:order-1 lg:order-1 md:order-2 px-10 xl:px-0 lg:px-0">
          <h1 className="xl:text-[3.5em] lg:text-[3.5em] md:text-[3.5em] text-4xl xl:pr-[300px] leading-none text-custom-black-text mb-7" style={{ fontFamily: "Made Mellow" }}>
            Run your <span className="text-custom-green-text">payroll</span> <span className="text-[#B4A572]">easily</span> in <span className="text-custom-red-text">seconds</span></h1>
          <p className="mb-7 text-lg">We've built an all-inclusive simple solution for individual and businesses to manage staff, 
          pay salaries, bills, and relevant taxes all at once.</p>
          <button className="bg-custom-green-bg text-white px-10 py-3 rounded-[25px] shadow-lg capitalize mb-7">start using free, forever</button>

          <div>
            <h4 className="font-bold">Download the Eazipay App</h4>
            <div className="xl:flex lg:flex md:flex sm:flex grid grid-cols-1 gap-8 mt-4">
              <div className="bg-white px-5 py-2 h-16 rounded-[10px] shadow-md flex">
                <img src={apple} alt="" className=" h-[100%] mr-2" />
                <div>
                  <p className="text-sm">Download on the</p>
                  <p className="font-bold capitalize text-lg">appstore</p>
                </div>
              </div>
              <div className="bg-white px-5 py-2 h-16 rounded-[10px] shadow-md flex">
                <img src={google} alt="" className=" h-[100%] mr-2" />
                <div>
                  <p className="text-sm">Get on </p>
                  <p className="font-bold capitalize text-lg">google play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-2 lg:order-2 md:order-1 xl:mb-0 lg:mb-0 mb-10">
          <img src={hero} alt="" className="w-[100%]" />
        </div>
      </div>

      {/*FOR INDIVIDUALS AND BUSINESSES*/}
      <div className="xl:mb-0 lg:mb-20 mb-14 pt-[150px] h-[950px]" 
        style={{backgroundImage: `url(${bg})`,backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: '10% 30%' }}>
        <div className="text-center mb-10">
          <h2 className="text-center xl:text-[3.5em] lg:text-[3.5em] md:text-[3.5em] text-4xl text-custom-green-text capitalize mb-5" style={{ fontFamily: "Made Mellow" }}>for individuals and businesses</h2>
          <p className="text-center xl:text-2xl lg:text-2xl md:text-2xl text-xl text-gray-500">Join 200+ businesses using Eazipay's easy soution</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 xl:gap-0 lg:gap-0 gap-5 md:grid-cols-2 xl:px-40 lg:px-20 px-10">
          <div className="rounded-[15px] xl:px-20 lg:px-10 px-10 py-10 bg-custom-green-bg text-white">
            <h3 className="mb-5 text-3xl font-semibold">Tamper-proof Payroll for Life</h3>
            <p className="mb-2 text-lg">Your staff payroll history is kept in one place forever</p>
            <p className="mb-2 text-lg">No more excel sheet or manual record</p>
            <p className="text-lg">Download your payroll history anytime you need it</p>
          </div>
          <div className="rounded-[15px] xl:px-20 lg:px-10 px-10 py-10 bg-custom-green-bg text-white xl:-ml-40 lg:-ml-40 shadow-lg">
            <h3 className="mb-5 text-3xl font-semibold capitalize">all payroll, anytime anywhere</h3>
            <p className="mb-2 text-lg">Wherever you are Eazipay has got you covered on All your payroll tasks.</p>
            <p className="mb-2 text-lg">Whether it is Taxes, Pension insurance, HIXMs, trustfunds, Eazipay handle all your compliance in one place and easily, in seconds!</p>
          </div>
          <div class="rounded-[15px] xl:px-20 lg:px-10 px-10 py-10 bg-custom-green-bg text-white xl:-ml-40 lg:-ml-40 shadow-lg">
            <h3 className="mb-5 text-3xl font-semibold capitalize">payroll in seconds</h3>
            <p className="mb-2 text-lg">never again will you spend more than 2 minutes on payroll</p>
            <p className="mb-2 text-lg">just click on your staff and bulk-pay them at once</p>
            <p className="mb-2 text-lg">Payment is done permanentely</p>
          </div>
        </div>
        <div className="flex justify-center py-14 px-5">
          <p className="text-xl xl:w-[40%] lg:w-[40%] text-center">We are happy to answer your queries. Please reach us at  
            <span className="text-custom-red-text"> hello@myeazipay.com</span> and expect our response shortle after
          </p>
        </div>
      </div>

      {/*how eazi pay works*/}
      <div className="xl:px-10 px-10 py-10 xl:py-40 lg:pb-40 md:pb-20 pb-20 mt-40 xl:mt-0 lg:mt-0">
        <div className="xl:mb-20 lg: mb-[120px]">
          <h2 className="text-center xl:text-[3.5em] lg:text-[3.5em] md:text-[3.5em] text-4xl text-custom-green-text capitalize" style={{ fontFamily: "Made Mellow" }}>
            how eazipay works</h2>
          <p className="text-center xl:text-2xl lg:text-2xl md:text-2xl text-xl text-gray-500">Get started in 3 simple steps.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 xl:px-10 lg:gap-10">
          <div className="relative">
            <div className="md:flex md:justify-center flex justify-center xl:mb-0 lg:mb-0 md:mb-24 mb-[250px]">
              <img src={BG} alt="" className="w-[90%] xl:w-[70%] lg:w-[90%] md:w-[65%]"/>
              <img src={phone} alt="" 
                className="absolute -top-10 xl:-top-10 lg:-top-[80px] 
                  md:-top-[50px] xl:left-[30%] lg:left-[95px] md:left-[50] w-[60%] xl:w-[40%] lg:w-[60%] md:w-[40%]" />
            </div>
          </div>
          <div className="md:mx-auto mx-auto xl:mx-0 lg:mx-0">
            <div className="relative mb-12">
              <img src={mask1} alt="" className="absolute top-8 left-0" />
              <div className="pl-14">
                <p className="bg-custom-green-bg w-[70px] rounded-[10px] px-[25px] py-4 text-4xl font-bold text-white mb-5 pl">1</p>
                <h4 className="text-xl font-bold mb-2 text-custom-green-heading-text">Create your free account</h4>
                <p className="text-lg text-custom-green-heading-text">click here to set up your Eazipay account</p>
              </div>
            </div>
            <div className=" relative mb-16 ml-14">
              <img src={mask2} alt="" className="absolute top-8 left-20" />
              <p className="bg-gray-200 w-[70px] rounded-[10px] px-[25px] py-4 text-4xl font-bold text-custom-green-text mb-5">2</p>
              <h4 className="text-xl font-bold mb-2 text-custom-green-heading-text">Create your free account</h4>
              <p className="text-lg text-custom-green-heading-text">click here to set up your Eazipay account</p>
            </div>
            <div className="ml-14">
              <p className="bg-gray-200 w-[70px] rounded-[10px] px-[25px] py-4 text-4xl font-bold text-custom-green-text mb-5">3</p>
              <h4 className="text-xl font-bold mb-2 text-custom-green-heading-text">Create your free account</h4>
              <p className="text-lg text-custom-green-heading-text">click here to set up your Eazipay account</p>
            </div>
          </div>
        </div>
      </div>

      {/*download section*/}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 xl:px-20 lg:px-10 lg:py-20 mt-0 xl:mt-0 lg:mt-0 md:mt-0">
        <div className="xl:px-20 lg:px-10 my-20 mb-20 xl:mb-0 lg:mb-0">
          <h1 
            className="xl:text-[3.5em] lg:text-[3.5em] md:text-[3.5em] text-4xl pr-[20px] leading-none text-custom-black-text mb-7 
              text-center xl:text-left lg:text-left" 
            style={{ fontFamily: "Made Mellow" }}>
            free forever for <span className="text-custom-red-text">your salary payment</span>
          </h1>
          <p className="font-semibold text-center xl:text-left lg:text-lef">Subscribe to the Eazilife today</p>
          <div className="xl:flex lg:flex md:flex sm:flex grid grid-cols-1 px-10 xl:gap-8 lg:gap-4 mt-4 justify-center xl:justify-start lg:justify-start">
            <div className="bg-white xl:px-5 lg:px-2 lg:w-[100%] py-2 h-16 rounded-[10px] shadow-md flex mb-2 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
              <img src={apple} alt="" className=" h-[100%] mr-2" />
              <div>
                <p className="text-sm">Download on the</p>
                <p className="font-bold capitalize text-lg">appstore</p>
              </div>
            </div>
            <div className="bg-white xl:px-5 lg:p lg:w-[100%] py-2 h-16 rounded-[10px] shadow-md flex">
              <img src={google} alt="" className="mr-2" />
              <div>
                <p className="text-sm">Get on</p>
                <p className="font-bold capitalize text-lg">google play</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={maskImage} alt="" className="z-20 relative lg:w-[80%] md:w-[40%]" />
          </div>
        </div>
      </div>

      {/**/}
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 px-10 xl:px-20 py-10 xl:py-20 mt-20 xl:mt-0 lg:mt-0 md:mt-0">
        <div className="xl:px-20 lg:px-10 my-auto xl:py-0 lg:py-0 py-10 xl:text-left lg:text-left text-center">
          <h1 
            className="xl:text-[3.5em] lg:text-[3.5em] md:text-[3.5em] text-4xl text-custom-green-text leading-none mb-7" 
            style={{ fontFamily: "Made Mellow" }}>
            Get an Exclusive Demo of Eazipay
          </h1>
          <p className="text-xl">Our greatest priority is to put you and your business first. Let's show you how we can help.</p>
        </div>
        <div>
          <div className="shadow-lg rounded-[10px] px-10 py-10">
            <h3 className="text-center font-bold text-xl py-5">First things first</h3>
            <p className="text-center xl:px-[120px] lg:px-10">We want to serve you better. Tell us a bit about yourself or company</p>
            <div className="border my-5 py-2 px-2 rounded-[10px]">
              <ul className="flex">
                <li className="w-[50%] py-3 bg-custom-green-bg text-white text-center capitalize rounded-[10px] shadow-md cursor-pointer mr-2">individual</li>
                <li className="w-[50%] text-center capitalize py-3 hover:bg-custom-green-bg hover:text-white transition rounded-[10px] cursor-pointer">company</li>
              </ul>
            </div>
            <form>
              <input 
                className="px-5 py-2 mb-5 rounded-[10px] w-full border border-solid capitalize"
                type="text" 
                placeholder="first name" />
              <input 
                className="px-5 py-2 mb-5 rounded-[10px] w-full border border-solid capitalize"
                type="text" placeholder="last name" />
              <input 
                className="px-5 py-2 mb-5 rounded-[10px] w-full border border-solid capitalize"
                type="text" placeholder="email" />
              <input 
                className="px-5 py-2 mb-5 rounded-[10px] w-full border border-solid capitalize"
                type="text" placeholder="job title" />
              <input 
                className="px-5 py-2 mb-5 rounded-[10px] w-full border border-solid capitalize"
                type="text" placeholder="company size" />
              <button className="w-full bg-custom-green-bg rounded-[20px] text-white py-2 capitalize">request demo</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
