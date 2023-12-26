import { MouseEventHandler } from "react";

interface ButtonProps {
  value?: string;
  onClick: MouseEventHandler;
  title: string;
  disable?: boolean;
}

export default function ValidButton({
  value,
  onClick,
  title,
  disable = false,
}: ButtonProps) {
  return (
    <button
      disabled={disable}
      value={value}
      onClick={onClick}
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-500 disabled:hover:bg-gray-600 disabled:text-gray-300 text-lg"
    >
      {title}
    </button>
  );
}
