import type { ReactElement } from 'react';

import { useState } from 'react';

import Section from '../../components/section/Section';

interface Experience {
	title: string;
	company: string;
	duration: string;
	responsibilites: string[];
	website: string;
}

const Experience = (): ReactElement => {

	const [compContext, setCompContext] = useState<number>(0);

	const experience: Experience[] = [
		{
			title: 'Solutions Developer',
			company: 'LPS',
			duration: 'April 2022 - Current',
			responsibilites: [
				'Developed advanced modules for the eMPF platform, leveraging ReactJS and TypeScript to significantly elevate user interfaces and experiences. My role focused on optimizing responsive design and collaborating with backend teams for seamless API integration. This synergy improved dynamic content management, markedly enhancing overall user experience and application performance',
				'Participated in an agile scrum methodology in which I consistently delivered tasks before the end of timelines, demonstrating a strong ability to manage time effectively and prioritize workloads. My proactive approach and attention to detail increased team efficiency, fostering a more dynamic and productive development environment.'
			],
			website: 'https://www.lpstech.com/site/en/home',
		},
		{
			title: 'IT Tech Support.',
			company: 'Konganbuddies',
			duration: 'July 2021 - April 2022',
			responsibilites: [
				'Established and managed networking environment, ensuring system efficiency and compliance with IT security policies.',
				'Administered firewall environments and upgraded network equipment to the latest firmware.',
				'Configured routing, switching equipment, and firewalls to optimize network operations'
			],
			website: 'https://konganbuddies.com/',
		}
	];

	console.log(experience);

	return (
		<Section id='experience'>
			<div className='flex flex-col w-3/6 h-2/4 space-y-4' >
				<div className='text-teal-100 text-3xl font-extrabold'>
					Where I've Worked
				</div>
				<div className='flex space-x-4'>
					<div className='flex flex-col'>
						{experience.map(({ company }, index) => {
							const handleCompany = (): void => {
								setCompContext(index);
							}
							return (
								<button
									className={`flex text-teal-50 hover:bg-teal-600 border-l-2 border-teal-900 py-2 px-1 ${compContext === index && 'border-teal-600 border-l-4'}`}
									onClick={handleCompany}>
									{company}
								</button>
							)
						})}
					</div>
					<div className='flex flex-col'>
						<div className='flex text-2xl text-teal-100 font-bold'>
							{experience[compContext].title}
							<a
								className='text-teal-600 hover:text-teal-400 pl-1 hover:underline hover:underline-offset-2 font-bold'
								target='_blank'
								href={experience[compContext].website}>
								@ {experience[compContext].company}
							</a>
						</div>
						<div className='text-sm text-teal-50'>
							{experience[compContext].duration}
						</div>
						<div className='flex flex-col space-y-4 mt-4 text-teal-50'>
							{experience[compContext].responsibilites.map((data, index) => {
								return <div key={index * data.length} className='text-justify'>
									{data}
								</div>
							})}
						</div>
					</div>
				</div>
			</div>
		</Section >
	)
}

export default Experience;