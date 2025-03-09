import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Lazy";

const metaCarousel: Meta<typeof Carousel> = {
  title: "Components/Organisms/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    autoPlay: { control: "boolean" },
    interval: { control: { type: "number", min: 1000, step: 500 } },
  },
};

export default metaCarousel;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: [
      "https://placehold.co/800x400",
      "https://placehold.co/800x400",
      "https://placehold.co/800x400",
    ],
    autoPlay: true,
    interval: 3000,
  },
};
