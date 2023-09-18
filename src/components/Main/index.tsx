import { type FC } from 'react'

interface MainProps {
	title: string
}

export const Main: FC<MainProps> = ({ title }) => {
	return (
		<div>
			<h1 className="text-4xl">{title}</h1>
		</div>
	)
}
