import React from 'react'
import logo from '../assets/landing-page/footer/logo.png'
import facebook from '../assets/landing-page/footer/facebook.png'
import instagram from '../assets/landing-page/footer/path.png'
import twitter from '../assets/landing-page/footer/pathq.png'
import linked from '../assets/landing-page/footer/linked-in.png'
import send from '../assets/landing-page/footer/send.png'




const Footer = () => {
	return (
		<>
			<div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 xl:px-20 lg:px-10 md:px-20 py-[65px] border-t border-gray-200">
				<div className="mb-10 xl:mb-0 lg:mb-0 md:mb-0">
					<div className="flex justify-center xl:justify-start lg:justify-start md:justify-start">
						<img src={logo} alt="" />
					</div>
					<p className="pr-10 my-10 xl:text-left lg:text-left md:text-left text-center">Copyright c 2023 Eazipay. All rights reserved</p>
					<div className="flex xl:gap-8 lg:gap-4 justify-center xl:justify-start lg:justify-start md:justify-start">
						<p className="bg-gray-200 p-1 rounded-[50%] mr-4 xl:mr-0 lg:mr-0 md:mr-0"><img src={instagram} alt="instagram" /></p>
						<p className="bg-gray-200 p-1 rounded-[50%] mr-4 xl:mr-0 lg:mr-0 md:mr-0"><img src={twitter} alt="twitter" /></p>
						<p className="bg-gray-200 p-1 rounded-[50%] mr-4 xl:mr-0 lg:mr-0 md:mr-0"><img src={linked} alt="linked In" /></p>
						<p className="bg-gray-200 p-1 rounded-[50%] mr-4 xl:mr-0 lg:mr-0 md:mr-0"><img src={facebook} alt="facebook" /></p>
					</div>
				</div>
				<div className="md:mb-20 xl:text-left lg:text-left md:text-left text-center mb-10 xl:mb-0 lg:mb-0 md:mb-0">
					<p className="capitalize font-bold text-xl mb-8">product</p>
					<ul className="capitalize">
						<li className="mb-4"><a href="">indidual</a></li>
						<li className="mb-4"><a href="">businesses</a></li>
						<li className="mb-4"><a href="">request demo</a></li>
						<li>pricing</li>
					</ul>
				</div>
				<div className="xl:text-left lg:text-left md:text-left text-center mb-10 xl:mb-0 lg:mb-0 md:mb-0">
					<p className="capitalize font-bold text-xl mb-10">legal</p>
					<ul className="capitalize">
						<li className="mb-4"><a href="">privacy policy</a></li>
						<li className="mb-4"><a href="">terms of service</a></li>
					</ul>
				</div>
				<div className="xl:text-left lg:text-left md:text-left text-center mb-10 xl:mb-0 lg:mb-0 md:mb-0">
					<p className="capitalize font-bold text-xl mb-10">resources</p>
					<ul className="capitalize">
						<li className="mb-4"><a href="">FAQs</a></li>
						<li className="mb-4"><a href="">blog</a></li>
						<li className="mb-4"><a href="">career</a></li>
						<li className="mb-4"><a href="">customer stories</a></li>
					</ul>
				</div>
				<div className="xl:text-left lg:text-left md:text-left text-center">
					<p className="capitalize font-bold text-xl mb-10">contact us</p>
					<ul className="mb-10">
						<li>eazipay@gmail.com</li>
						<li>+234 816 878 9518</li>
					</ul>
					<form>
						<input 
							className="rounded-[20px] border border-solid py-2 px-5 bg-gray-200"
							type="text" placeholder="Your email address" />
						<button className="bg-gray-200 rounded-[20px] py-2 -ml-12"><img src={send} alt="" /></button>
					</form>	
				</div>
			</div>
		</>
	)
}

export default Footer