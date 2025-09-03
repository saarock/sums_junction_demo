import React from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isMb?: boolean;
  disabled?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  isMb = true,
  disabled,
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center ${
        isMb ? "mb-12 " : ""
      }`}
    >
      <Button
        size="lg"
        onClick={onClick}
        disabled={disabled}
        className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 
          transform transition-transform duration-200 hover:scale-105 active:scale-95
        `}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
