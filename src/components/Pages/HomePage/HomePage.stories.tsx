import HomePage from "./HomePage";
import {LazyThemeProvider} from "../../Foundations/ThemeProvider/Lazy";

export default {
  title: "Components/Pages/HomePage",
  component: HomePage,
};

export const Default = () => (
  <LazyThemeProvider>
    <HomePage />
  </LazyThemeProvider>
);