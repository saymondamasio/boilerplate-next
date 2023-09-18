import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main />', () => {
	it('should render the heading', () => {
		const { container } = render(<Main title="Hello" />)

		expect(screen.getByRole('heading', { name: /Hello/i })).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
