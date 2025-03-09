import { Meta, StoryObj } from "@storybook/react";
import Dashboard from "./Lazy";

const metaDashboard: Meta<typeof Dashboard> = {
  title: "Components/Organisms/Dashboard",
  component: Dashboard,
  tags: ["autodocs"],
};

export default metaDashboard;

export const Default: StoryObj<typeof Dashboard> = {};