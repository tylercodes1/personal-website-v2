const fs = require("fs");
const json3 = require("json3");

module.exports = (plop) => {
	const path = "resources/links/";

	// helpers
	plop.setHelper("math", function (lvalue, operator, rvalue, options) {
		lvalue = parseFloat(lvalue);
		rvalue = parseFloat(rvalue);

		return {
			"+": lvalue + rvalue,
			"-": lvalue - rvalue,
			"*": lvalue * rvalue,
			"/": lvalue / rvalue,
			"%": lvalue % rvalue,
		}[operator];
	});

	// utils
	function readJSON(filename) {
		try {
			const content = fs.readFileSync(filename, "utf-8");
			const json = json3.parse(content);
			return json;
		} catch (error) {
			return { error };
		}
	}

	function modifyJSON(json, vars, config, plop) {
		if (config.key === "No Key (Array)") {
			json.push(config.value);
		} else {
			json[key] = value;
		}

		return json;
	}

	function listJSONKeys(JSONFile, ...additionalKeys) {
		const json = readJSON(path.concat(JSONFile.concat(".json")));
		try {
			// is array, only list one option
			json.push("test");
			return ["No Key (Array)"];
		} catch (e) {
			// is object, don't list "No Key" as an option
			let keys = Object.keys(json);
			keys = [...keys, ...additionalKeys];
			return keys.filter((e) => e !== "No Key (Array)");
		}
	}

	// validators
	function fileExistsValidator(input, vars) {
		const json = readJSON(path.concat(input).concat(".json"));

		if ("error" in json) return "File not found";
		return true;
	}

	function hasValue(input) {
		if (input.length === 0) return "Must provide value";
		return true;
	}

	// custom actions
	plop.setActionType("json-modify", function (vars, config, plop) {
		// update handlebars expression variables with values
		for (let [key, value] of Object.entries(config)) {
			if (typeof value === "string")
				config[key] = plop.renderString(value, vars);
		}

		return new Promise((resolve, reject) => {
			try {
				const file_json = readJSON(config.path);
				let json = modifyJSON(file_json, vars, config, plop);
				fs.writeFileSync(config.path, JSON.stringify(json, null, 2));
				resolve("Success");
			} catch (error) {
				reject(error);
			}
		});
	});

	// generators
	plop.setGenerator("JSON Modify", {
		description: "Generate a component and storybook story",
		prompts: [
			{
				type: "input",
				name: "path",
				message: "path to JSON file:",
				validate: fileExistsValidator,
			},
			{
				type: "list",
				name: "JSONKey",
				message: "JSON Key:",
				choices: (vars) =>
					listJSONKeys(vars.JSONFile, "New Key", "No Key (Array)"),
			},
			{
				type: "input",
				name: "newJSONKey",
				message: "New JSON Key:",
				validate: hasValue,
				when: (vars) => {
					return vars.JSONKey === "New Key";
				},
			},
			{
				type: "input",
				name: "JSONValue",
				message: "JSON Value:",
				validate: hasValue,
			},
		], // array of inquirer prompts
		actions: [
			{
				type: "json-modify",
				component: "{{component}}",
				key: "{{#if newJSONKey}}{{newJSONKey}}{{else}}{{JSONKey}}{{/if}}",
				value: "{{JSONValue}}",
				path: `${path}{{JSONFile}}.json`,
			},
		],
	});

	plop.setGenerator("Add component", {
		description: "Add a new component",
		prompts: [
			{
				type: "input",
				name: "component",
				message: "Component name:",
				validate: hasValue,
			},
			{
				type: "input",
				name: "classes",
				message: "Space separated class names:",
				validate: hasValue,
			},
		],
		actions: [
			{
				type: "addMany",
				destination: "stories/components/{{pascalCase component}}",
				base: "plop/templates/component",
				templateFiles: "plop/templates/component/**.hbs",
			},
		],
	});

	plop.setGenerator("test math", {
		description: "Test Math",
		prompts: [
			{
				type: "input",
				name: "num",
				message: "number:",
				validate: hasValue,
			},
		],
		actions: [
			// {
			// 	type: "addMany",
			// 	destination: "stories/components/{{math num '-' 1}}",
			// 	base: "plop/templates/component",
			// 	templateFiles: "plop/templates/component/**.hbs",
			// },
			{
				type: "add",
				path: "stories/components/{{math num '-' 1}}",
				templateFile: "plop/templates/component/component.jsx.hbs",
			},
		],
	});
};
