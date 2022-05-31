import React from "react";

import Nav from "./Nav";

import navLinks from "../../../resources/links/nav-links.json";

export default {
	title: "Core/Nav",
	component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	links: navLinks,
};
