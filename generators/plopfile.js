module.exports = (
	/** @type {import('plop').NodePlopAPI} */
	plop
) => {
	const configComponent = {
		description: 'Create a component',

		// inquirer prompts
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of the component?'
			}
		],

		// actions to perform
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/index.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/stories.tsx',
				templateFile: 'templates/stories.tsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/test.tsx',
				templateFile: 'templates/test.tsx.hbs'
			}
		]
	}

	plop.setGenerator('component', configComponent)
}
