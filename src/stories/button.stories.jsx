import React from "react";

import Button from "../components/button/button.component";

export default {
	title: "React Buttons/Button",
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
	color: "primary",
	label: "Default",
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: "secondary",
	label: "Secondary",
};

export const Danger = Template.bind({});
Danger.args = {
	color: "danger",
	label: "Danger",
};

export const Outline = Template.bind({});
Outline.args = {
	variant: "outline",
	label: "Default",
};

export const Text = Template.bind({});
Text.args = {
	variant: "text",
	label: "Default",
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	label: "Disabled",
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
	disableShadow: true,
	label: "Default",
};

export const DisabledText = Template.bind({});
DisabledText.args = {
	disabled: true,
	variant: "text",
	label: "Disabled",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
	startIcon: "local_grocery_store",
	label: "Default",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
	endIcon: "local_grocery_store",
	label: "Default",
};

export const Small = Template.bind({});
Small.args = {
	size: "sm",
	label: "Default",
};

export const Medium = Template.bind({});
Medium.args = {
	size: "md",
	label: "Default",
};

export const Large = Template.bind({});
Large.args = {
	size: "lg",
	label: "Default",
};
