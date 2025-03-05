import { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const metaLoginForm: Meta<typeof LoginForm> = {
  title: "Components/Organisms/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
};

export default metaLoginForm;

export const Default: StoryObj<typeof LoginForm> = {};