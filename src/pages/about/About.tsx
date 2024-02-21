import type { ReactElement } from 'react';
import Section from '../../components/section/Section';
import image from '../../assets/JosonRyanPaolo.jpg';

const About = (): ReactElement => {
	const technologies = [
		'Javascript (ES6+)',
		'Typescript',
		'React',
		'Node.js',
		'Tailwind css',
		'Vite.js'
	];

	return (
		<Section id="about">
			<div className="flex flex-col h-3/4 w-3/4 justify-center">
				<div className="flex justify-start text-teal-100 text-4xl font-extrabold space-x-2">
					About Me
				</div>
				<div className="flex space-x-2">
					<div className="w-3/4 space-y-4">
						<div className="text-justify text-teal-400">
							Hello! I'm Ryan, and I like learning things and
							building them. The reason why I chose web
							development was that there was a lot to learn and a
							lot of things to build. I started web development in
							2022, where I had to learn JavaScript from scratch,
							and wow, how I fell in love with it.
						</div>
						<div className="text-teal-400 flex flex-col space-y-4">
							<div className="">
								Technologies I have been working with:
							</div>
							<div className="grid grid-cols-4 gap-2">
								{technologies.map((values) => (
									<div>{values}</div>
								))}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center rounded-2xl w-40 h-40 bg-gray-600 overflow-hidden drop-shadow-2xl grayscale hover:grayscale-0">
						<img src={image} />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default About;