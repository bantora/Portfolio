import type { PropsWithChildren, ReactElement } from "react";

const Section = ({ children }: PropsWithChildren): ReactElement => {
	return <div className="flex justify-center items-center h-screen w-screen" >{children}</div>
}

export default Section;