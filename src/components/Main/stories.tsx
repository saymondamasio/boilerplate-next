import type { Meta, StoryObj } from '@storybook/react'

import { Main } from '.'

// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Main> = {
	component: Main,
	title: 'Main'
}

export default meta
type Story = StoryObj<typeof Main>

export const Default: Story = {
	args: {
		title: 'Hello Storybook'
	}
}
