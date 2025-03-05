import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./Lazy";

const metaIconButton: Meta<typeof IconButton> = {
  title: "Components/Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
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

export const Primary: StoryObj<typeof IconButton> = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: StoryObj<typeof IconButton> = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "md",
  },
};

export const Outline: StoryObj<typeof IconButton> = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Disabled: StoryObj<typeof IconButton> = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};
