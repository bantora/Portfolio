import type { ReactElement } from "react";

const Header = (): ReactElement => {
	const scrollToElement = (el: string) => {
		const element = document.getElementById(el);
		if (element) element.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div className="">
			<div className="flex justify-between h-16 items-center mx-16 ">
				<div className="">
					<a href="http://localhost:5173/">R</a>
				</div>
				<div className="flex space-x-4">
					<a href="#about" onClick={() => scrollToElement('about')}>1. About</a>
					<a href="">2. Experience</a>
					<a href="">3. Projects</a>
					<a href="">4. Contact</a>
					<button className="outline outline-2 outline-offset-2">Resume</button>
				</div>
			</div>
		</div>
	)
}

export default Header;