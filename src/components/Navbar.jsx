import React, { useState, useEffect } from 'react'
import logo from '../assets/landing-page/footer/logo.png'

const Navbar  = () => {
	const [show, setShow] = useState(false)
	const [scrollColor, setScrollColor] = useState('bg-white');
	const [scrollShadow, setScrollShadow] = useState(false);

	const toggleMobileMenu = () => {
	    setShow(!show);
	};

	const handleScroll = () => {
	    const currentScroll = window.pageYOffset;
	    const navbarHeight = 64; // Adjust this value based on your navbar height

	    if (currentScroll >= navbarHeight) {
	      setScrollColor('bg-white'); // Change the color class to your desired color
	      setScrollShadow(true)
	    } else {
	      setScrollColor('bg-white');
	      setScrollShadow(false)
	    }
	};

	useEffect(() => {
	    window.addEventListener('scroll', handleScroll);

	    return () => {
	      window.removeEventListener('scroll', handleScroll);
	    };
	}, []);
	return (
		<>
			<nav className={`fixed lg:px-10 px-5 py-2 xl:h-[100px] lg:h-[100px] h-[70px] w-full z-30 xl:flex lg:flex 
				xl:justify-center lg:justify-center transition-colors duration-300 ${scrollColor} 
				${scrollShadow ? 'shadow-md' : ''}`} >
				<div className="my-auto xl:mr-40 lg:mr-20 xl:w-[10%] lg:w-[10%] w-[50%] float-left">
					<img src={logo} alt="logo" className="xl:w-[100%] w-40 lg:w-[100%] md:w-[40%]" />
				</div>
				<div className="my-auto xl:mr-40 lg:mr-20">
					<ul className="hidden xl:flex lg:flex space-x-8 uppercase" >
						<li className="text-[12px] tracking-[.15em]"><a href="">individual</a></li>
						<li className="text-[12px] tracking-[.15em]"><a href="">business</a></li>
						<li className="text-[12px] tracking-[.15em]"><a href="">pricing</a></li>
						<li className="text-[12px] tracking-[.15em]"><a href="">set your payroll</a></li>
					</ul>
				</div>
				<div className="flex justify-end xl:my-auto lg:my-auto">
					<div className="hidden xl:flex lg:flex">
						<button className="rounded-[20px] px-10 py-2 border border-[#11453B] 
							mr-2 capitalize transition hover:bg-[#11453B] hover:text-white">log in</button>
						<button className="rounded-[20px] px-10 py-2 border border-[#11453B] 
							bg-[#11453B] text-white capitalize hover:bg-white hover:text-[#11453B]">register</button>
					</div>
					<div className="flex flex-col items-end cursor-pointer xl:hidden lg:hidden py-3">
						<button className="flex flex-col" onClick={toggleMobileMenu}>
							<span className="py-[0.5%] px-9 bg-custom-green-bg mb-2"></span>
							<span className="py-[0.5%] px-9 bg-custom-green-bg mb-2"></span>
							<span className="py-[0.5%] px-9 bg-custom-green-bg "></span>
						</button>
					</div>
				</div>
				{show && 
			    	<div className="lg:hidden absolute mt-10 w-full shadow-lg bg-white" id="mobile-menu">
					    <div className="px-2 pt-2 pb-3 space-y-1 capitalize">
					      <a href="/" className="text-custom-gray-text block px-3 py-2 rounded-md text-base font-medium">individual</a>
					      <a href="/about" className="text-custom-gray-text block px-3 py-2 rounded-md text-base font-medium">business</a>
					      <a href="/" className="text-custom-gray-text block px-3 py-2 rounded-md text-base font-medium">pricing</a>
					      <a href="/" className="text-custom-gray-text block px-3 py-2 rounded-md text-base font-medium">set your payroll</a>
					      <button className="rounded-[20px] px-10 py-2 border border-[#11453B] 
					      	mr-2 capitalize transition hover:bg-[#11453B] hover:text-white">log in</button>
						  <button className="rounded-[20px] px-10 py-2 border border-[#11453B] 
							bg-[#11453B] text-white capitalize hover:bg-white hover:text-[#11453B]">register</button>
					    </div>
					</div>
				}
			</nav>
		</>
	)
}

export default Navbar