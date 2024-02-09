import type { ReactElement } from "react";

import { useState, useEffect } from 'react';

const Header = (): ReactElement => {

	const [scrollPos, setScrollPos] = useState<number>(window.scrollY);
	const [visible, setVisible] = useState<boolean>(true);
	const [atTop, setAtTop] = useState(false);

	useEffect(() => {

		if (scrollPos === 0) {
			setAtTop(false);
		} else {
			setAtTop(true)
		}

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isScrollingDown = scrollPos < currentScrollPos;

			setScrollPos(currentScrollPos);

			setVisible(!isScrollingDown);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPos])

	return (
		<div className="z-50">
			<div id="header" className={`fixed top-0 left-0 w-full ${visible ? 'flex' : 'hidden'} justify-between h-16 items-center px-16 ${atTop && 'shadow'} bg-opacity-95 backdrop-blur-sm `}>

				<div className="flex items-center justify-center h-10 w-10 bg-teal-900 rounded-md shadow-md text-teal-100 text-sm font-semibold border border-gray-300  animate-bounce hover:animate-spin">
					<a href="#" className="flex items-center justify-center h-full w-full">R</a>
				</div>

				<div className="flex space-x-10 ">
					<a href="#about" className="text-teal-100 hover:text-teal-400">About</a>
					<a href="#experience" className="text-teal-100 hover:text-teal-400">Experience</a>
					<a href="#projects" className="text-teal-100 hover:text-teal-400">Projects</a>
					<a href="#contact" className="text-teal-100 hover:text-teal-400">Contact</a>
					<button className="outline outline-2 outline-offset-2 rounded-md px-2 text-teal-100 hover:text-teal-400 animate-pulse">Resume</button>
				</div>
			</div>
		</div >
	)
}

export default Header;