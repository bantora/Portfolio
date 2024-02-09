import type { ReactElement } from 'react';
import Section from '../../components/section/Section';

const Contact = (): ReactElement => {

	return (
		<Section id='contact'>
			<div className='flex space-x-8 align-middle justify-center'>

				<div className='flex-col justify-start space-y-6 align-middle'>
					<div className='text-teal-100 text-5xl font-extrabold'>Got a project idea or just want to say hi?</div>
					<div className='text-teal-200 font-bold'> Feel free to reach out via the form below or email me at
						<div className='text-cyan-600 font-extrabold'>
							<a href='mailto:ryanpaolo.g.joson@gmail.com'>ryanpaolo.g.joson@gmail.com</a>
						</div>
						I'm eager to connect and discuss your ideas!</div>
				</div>

				<div className='flex-col space-y-2 border-2 p-10'>
					<label className='text-cyan-200 font-bold text-1xl' htmlFor='contact-name'>Name:</label>
					<div>
						<input id='contact-name' className='' />
					</div>
					<label className='text-cyan-200 font-bold text-1xl' htmlFor='contact-message'>Message: </label>
					<div className=''>
						<textarea id='contact-message' rows={5} cols={50} className='' />
					</div>
					<div>
						<button className="outline outline-2 outline-offset-2 rounded-md px-2 text-teal-100 hover:text-teal-400 animate-pulse">
							Send
						</button>
					</div>
				</div>
			</div>
		</Section >
	)
}

export default Contact;