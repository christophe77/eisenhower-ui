import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Lazy";

const metaAvatar: Meta<typeof Avatar> = {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default metaAvatar;

export const Small: StoryObj<typeof Avatar> = {
  args: {
    src: "https://placehold.co/40",
    size: "sm",
  },
};

export const Medium: StoryObj<typeof Avatar> = {
  args: {
    src: "https://placehold.co/60",
    size: "md",
  },
};

export const Large: StoryObj<typeof Avatar> = {
  args: {
    src: "https://placehold.co/80",
    size: "lg",
  },
};
