import { useState } from 'react'

function App() {

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 px-10 xl:px-80 py-10 xl:py-20">
        <div className="px-20 my-auto">
          <h1 className="text-[3.5em] text-custom-green-text leading-none mb-7" style={{ fontFamily: "Made Mellow" }}>Get an Exclusive Demo of Eazipay</h1>
          <p className="text-xl">Our greatest priority is to put you and your business first. Let's show you how we can help.</p>
        </div>
        <div>
          <div className="shadow-lg rounded-[10px] px-10 py-10">
            <h3 className="text-center font-bold text-xl py-5">First things first</h3>
            <p className="text-center px-[120px]">We want to serve you better. Tell us a bit about yourself or company</p>
            <div className="border my-5 py-2 px-2 rounded-[10px]">
              <ul className="flex">
                <li className="w-[50%] py-3 bg-custom-green-bg text-white text-center capitalize rounded-[10px] shadow-md cursor-pointer">individual</li>
                <li className="w-[50%] text-center capitalize py-3">company</li>
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
    </>
  )
}

export default App
