import React from "react";
import { designTokens } from "../../../theme/designTokens";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  error,
  success,
  fullWidth = false,
  icon,
  className = "",
  ...props
}) => {
  const isCheckboxOrRadio = type === "checkbox" || type === "radio";

  return (
    <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : "w-auto"}`}>
      {/* Label (uniquement si ce n'est pas une checkbox ou un radio) */}
      {label && !isCheckboxOrRadio && (
        <label className="text-sm font-medium text-white">{label}</label>
      )}

      <div
        className={`flex items-center bg-${designTokens.colors.background} border ${
          error
            ? "border-red-500"
            : success
            ? "border-green-500"
            : `border-${designTokens.colors.outline}`
        } rounded-${designTokens.borderRadius.md} px-3 py-2 transition-all focus-within:ring-2 focus-within:ring-${designTokens.colors.primary}`}
      >
        {icon && <span className="mr-2 text-gray-400">{icon}</span>}
        <input
          type={type}
          className={`w-full bg-transparent outline-none text-white text-sm placeholder-gray-400 ${className}`}
          {...props}
        />
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
