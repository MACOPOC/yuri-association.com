import { MouseEventHandler, ReactNode } from "react";

const PillButton = ({ children, onClick, className }: {children: ReactNode, onClick: MouseEventHandler<HTMLButtonElement>, className: string) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default PillButton;