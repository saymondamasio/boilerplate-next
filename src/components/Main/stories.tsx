import Main from '.'
import { text, withKnobs } from '@storybook/addon-knobs'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'Typescript, ReactJS, NextJS e Styled Components'
    )}
  />
)
