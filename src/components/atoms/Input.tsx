
type props = {
  id?: string;
  placeholder?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  bg?: string;
  text?: string;
  label1?: any;
  label2?: any;
  label2_tailwind?: string;
  label3?: any;
  tailwind?: string;
  min?: number
};
 
export const InputForm: React.FC<props> = ({ id, type, placeholder, value, onChange, onKeyDown, bg = "[#f1f1f1]", text, label1, label2, label2_tailwind, tailwind, label3, min }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label1 ? label1 : ''}</h1>
        <p className=" text-sm text-gray-500">{label3 ? label3 : ''}</p>
      </div>
      <input
        type={type}
        id={id}
        className={` ${tailwind} text-${text} bg-${bg} border my-1  border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        min={min}
      />
      <p className={` text-xs text-gray-500 ${label2_tailwind} `}>
        {label2}
      </p>
    </div>
  );
};
