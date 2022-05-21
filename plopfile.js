module.exports = (plop) => {
	// helpers
	// generators
	plop.setGenerator("component", {
		description: "Generate a component and storybook story",
		prompts: [
			{
				type: "input",
				name: "component",
				message: "Component Name:",
			},
		], // array of inquirer prompts
		actions: [
			{
				type: "addMany",
				destination: "stories/components/{{pascalCase component}}",
				base: "plop/templates/component",
				templateFiles: "plop/templates/component/**.hbs",
			},
		], // array of actions
	});
};
