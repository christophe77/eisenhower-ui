import BaseTemplate from "./BaseTemplate";
import { ThemeProvider } from "../../Foundations/ThemeProvider/ThemeProvider";

export default {
  title: "Components/Templates/BaseTemplate",
  component: BaseTemplate,
};

export const Default = () => (
  <ThemeProvider>
    <BaseTemplate title="Page d'exemple">
      <p>Contenu de la page</p>
    </BaseTemplate>
  </ThemeProvider>
);