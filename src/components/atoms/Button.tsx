type props = {
  label: string;
  onClick?:  (event: React.MouseEvent<HTMLButtonElement>) => void; 
  bg?:string;
  tailwind?:string
  buttonType?: "button" | "submit" | "reset";
};

export const NormalButton: React.FC<props> = ({ label, bg="primary-100", tailwind, onClick, buttonType = "button"  }) => {
  return (
    <button
    onClick={onClick}
    type={buttonType}
    className={` ${tailwind} text-white bg-[#0043A1] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 w-full focus:outline-none `}
  >
    { label }
  </button>
  );
};