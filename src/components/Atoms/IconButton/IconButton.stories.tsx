import { Meta, StoryObj } from "@storybook/react";
import {LazyIconButton, IconButtonProps} from "./Lazy";

const metaIconButton: Meta<IconButtonProps> = {
  title: "Components/Atoms/IconButton",
  component: LazyIconButton,
  tags: ["autodocs"],
  decorators: [
		(Story) => (
			<div className="p-5">
				<Story />
			</div>
		),
	],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default metaIconButton;

export const Primary: StoryObj<IconButtonProps> = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: StoryObj<IconButtonProps> = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

export const Outline: StoryObj<IconButtonProps> = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Disabled: StoryObj<IconButtonProps> = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

export const Pending: StoryObj<IconButtonProps> = {
	args: {
		children: 'Pending...',
		variant: 'primary',
		size: 'md',
		disabled: true,
	},
};
