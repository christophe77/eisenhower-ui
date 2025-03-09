import { Meta, StoryObj } from "@storybook/react";
import Card from "./Lazy";

const metaCard: Meta<typeof Card> = {
  title: "Components/Molecules/Card",
  component: Card,
  tags: ["autodocs"],
};

export default metaCard;

export const Default: StoryObj<typeof Card> = {
  args: {
    title: "Card Title",
    description: "This is a simple card description.",
  },
};