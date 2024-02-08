import type { PropsWithChildren, ReactElement } from "react";

interface SectionProps extends PropsWithChildren {
	id: string
}

const Section = ({ children, id }: SectionProps): ReactElement => {
	return <div id={id} className="flex justify-center items-center h-screen w-screen" >{children}</div>
}

export default Section;