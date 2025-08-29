import React from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isMb? : boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick, isMb=true }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isMb ? 'mb-12 ' : "" }`}>
      <Button
        size="lg"
        onClick={onClick}
        className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 `}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
