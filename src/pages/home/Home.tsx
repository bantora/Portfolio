import type { ReactElement } from 'react';
import Section from '../../components/section/Section';

const Home = (): ReactElement => {
	return (
		<Section id='home'>
			<div className='mx-96 flex-col space-y-4'>
				<div className='text-teal-100 font-extrabold text-6xl'>Hi! I'm</div>
				<div className='text-teal-200 font-extrabold text-7xl'>Ryan Paolo Joson.</div>
				<div className='text-teal-300 font-extrabold text-3xl'>I'm a Web Developer.</div>
				<div className='text-teal-400 font-extrabold text-xl'>Versatile IT professional with a focus on web development, specializing in JavaScript. Expert in crafting responsive websites using modern technologies, including ReactJS. Known for delivering efficient and user-centric web solutions with a keen eye for detail and a strong background in full-stack development.</div>
			</div>
		</Section>
	)
}

export default Home;