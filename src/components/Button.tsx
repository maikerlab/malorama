import React from "react";

interface IButtonProps {
  text: string;
}

export default function Button({ text }: IButtonProps) {
  return (
    <button
      type="button"
      className="m-3 rounded-lg bg-blue p-3 text-white hover:bg-orange hover:text-black dark:bg-green-lizard dark:text-black dark:hover:font-bold"
    >
      {text}
    </button>
  );
}
