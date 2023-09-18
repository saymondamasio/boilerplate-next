import { type FC } from 'react'

interface MainProps {
	title: string
}

export const Main: FC<MainProps> = ({ title }) => {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	)
}
