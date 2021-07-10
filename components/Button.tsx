import React from "react";
import classNames from "../utils/classNames";

interface ButtonProps {
  onClick?: (event: any) => void;
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, type, id }) => {
  return (
    <button
      className={classNames(
        "mx-4 inline-flex items-center justify-center px-6 py-2 border border-transparent",
        "text-base font-medium rounded-md text-gray-900 bg-yellow-300 hover:bg-indigo-200",
        "transition transform duration-500 ease-in-out uppercase tracking-wider hover:-translate-y-1"
      )}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
