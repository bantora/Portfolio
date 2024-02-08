import type { ReactElement } from 'react';
import Section from '../../components/section/Section';

const Contact = (): ReactElement => {
	const id = 'contact'

	return (
		<Section id={id}>
			<div id={id} className=''>Contact</div>
		</Section>
	)
}

export default Contact;