import { TKLink } from "./TKLink";

export default {
	title: "components/TKLink",
	component: TKLink,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TKLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	name: "google",
	href: "www.google.com",
	key: "google",
};
