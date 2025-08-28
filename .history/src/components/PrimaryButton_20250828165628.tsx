import React from "react";
import { Button } from "./ui/button";


interface ButtonProps {
    text: string;
    onClick: () => void
}

const PrimaryButton: React.FC<ButtonProps> = (
    {
        text,
        onClick
    }
) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <Button
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-10 py-4 rounded-xl border-0 hover:scale-105 transition-all duration-300 font-semibold"
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
