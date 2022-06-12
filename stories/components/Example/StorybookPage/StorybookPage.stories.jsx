import React from "react";
import { within, userEvent } from "@storybook/testing-library";

import { StorybookPage } from "./StorybookPage";

export default {
	title: "Example/Page",
	component: StorybookPage,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen",
	},
};

const Template = (args) => <StorybookPage {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const loginButton = await canvas.ByRole("button", {
		name: /Log in/i,
	});

	await userEvent.click(loginButton);
};
