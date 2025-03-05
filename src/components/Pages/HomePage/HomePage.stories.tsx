import HomePage from "./HomePage";
import { ThemeProvider } from "../../Foundations/ThemeProvider/ThemeProvider";

export default {
  title: "Components/Pages/HomePage",
  component: HomePage,
};

export const Default = () => (
  <ThemeProvider>
    <HomePage />
  </ThemeProvider>
);