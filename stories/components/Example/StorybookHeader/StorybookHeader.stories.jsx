import React from "react";

import { StorybookHeader } from "./StorybookHeader";

export default {
	title: "Example/StorybookHeader",
	component: StorybookHeader,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen",
	},
};

const Template = (args) => <StorybookHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {
		name: "Jane Doe",
	},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
