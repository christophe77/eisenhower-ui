import { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";

const metaInputGroup: Meta<typeof InputGroup> = {
  title: "Components/Molecules/InputGroup",
  component: InputGroup,
};

export default metaInputGroup;

export const Default: StoryObj<typeof InputGroup> = {
  args: {
    placeholder: "Enter text...",
    buttonText: "Submit",
  },
};