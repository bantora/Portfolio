import type { ReactElement } from 'react';
import Section from '../../components/section/Section';

const Projects = (): ReactElement => {
	return (
		<Section id='projects'>
			<div className='flex flex-col space-y-10 h-3/4 w-3/4'>
				<div className='flex justify-start text-teal-100 text-5xl font-extrabold'>Project Highlight</div>
				<div className='h-full w-full bg-teal-200 rounded-lg border-solid border-2 border-cyan-600 flex flex-wrap p-5'>
					<div className='border bg-red-300 rounded-xl p-2 h-40 w-60'>Project 1</div>
				</div>
			</div>
		</Section>
	)
}

export default Projects;