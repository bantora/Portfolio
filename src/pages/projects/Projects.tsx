import type { ReactElement } from 'react';

import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { FaGithubSquare } from "react-icons/fa";

import Section from '../../components/section/Section';

const Projects = (): ReactElement => {

	const [index, setIndex] = useState<number>(0);
	const [pulse, setPulse] = useState<boolean>(false);

	const projectImages = [
		{
			title: 'Coffee Shop',
			url: 'src/assets/CoffeeShop.png',
			summary: '',
			links: {
				website: 'https://bantora.github.io/CoffeeShop/',
				repository: 'https://github.com/bantora/CoffeeShop',
				techStack: ['React', 'Vite', 'Github-Pages', 'React-Image-Gallery'],
			}
		},
		{
			title: 'Guess The Number',
			url: 'src/assets/GuessTheNumber.png',
			summary: 'A project created under the course of Jonas Schmedtmann, The Complete JavaScript Course',
			links: {
				website: 'https://bantora.github.io/guess-the-number/',
				repository: 'https://github.com/bantora/guess-the-number',
				techStack: ['HTML', 'CSS', 'Javascript'],
			}

		},
		{
			title: 'Pig Game',
			url: 'src/assets/PigGame.png',
			summary: 'A project created under the course of Jonas Schmedtmann, The Complete JavaScript Course',
			links: {
				website: 'https://bantora.github.io/pig-game/',
				repository: 'https://github.com/bantora/pig-game',
				techStack: ['HTML', 'CSS', 'Javascript'],
			}

		}
	]

	const handleSlide = (slideIndex: number): void => {
		setIndex(slideIndex)
	}

	const handleNextSlide = (): void => {
		const findIndex = index === (projectImages.length - 1) ? 0 : index + 1;
		handleSlide(findIndex);
	}

	const handlePrevSlide = (): void => {
		const findIndex = index === 0 ? projectImages.length - 1 : index - 1;
		handleSlide(findIndex);
	}

	const handleClickRepository = (): void => {
		setPulse(true);
		setTimeout(() => {
			setPulse(false)
			window.open(projectImages[index].links.repository);
		}, 1000);
	}

	return (
		<Section id='projects'>
			<div className='flex flex-col space-y-10 h-3/4 w-3/4'>
				<div className='flex justify-start text-teal-100 text-5xl font-extrabold space-x-2'>Project Highlight
					<a target='_blank' href={projectImages[index].links.website} className="ml-5 text-teal-600 hover:text-teal-400 pl-1 hover:underline hover:underline-offset-2 font-bold"> @{projectImages[index].title}</a>
					<div onClick={handleClickRepository} className={`animate-bounce ${pulse ? 'animate-ping' : ''} cursor-pointer`}><FaGithubSquare /></div>
				</div>
				<div style={{ backgroundImage: `url("${projectImages[index].url}")`, }} className='flex justify-between content-center h-full w-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500 group'>
					<div className='cursor-pointer hidden flex-col justify-center group-hover:flex text-teal-200 ml-48'>
						<HiChevronDoubleLeft onClick={handlePrevSlide} size={50} />
					</div>
					<div className='cursor-pointer hidden flex-col justify-center group-hover:flex text-teal-200 mr-48'>
						<HiChevronDoubleRight onClick={handleNextSlide} size={50} />
					</div>
				</div>
				<div className='flex top-4 justify-center py-2'>{
					projectImages.map((_, ind) => <div className={`cursor-pointer ${index === ind ? 'text-teal-200' : 'text-teal-600'} hover:text-teal-800 `} onClick={() => handleSlide(ind)}><RxDotFilled size={30} /></div>)
				}</div>
			</div>
		</Section >
	)
}

export default Projects;