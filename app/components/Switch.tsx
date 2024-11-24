import { useState } from "react";

interface Props {
  options: [string, string];
  selectedOption: string;
  optionWidth?: number;
  onChange: (option: string) => void;
}

export const Switch = ({
  options,
  selectedOption,
  optionWidth = 100,
  onChange,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(
    options.indexOf(selectedOption)
  );

  const handleOptionClick = (option: string, index: number) => {
    onChange(option);
    setActiveIndex(index);
  };

  return (
    <div className="relative flex p-2 rounded-full bg-grayBackground">
      <div
        className="absolute h-[27px] left-[5px] top-[5px] z-1 bg-white rounded-full transition-transform duration-500 border-lightGrayBorder2 border"
        style={{
          transform: `translateX(${activeIndex === 0 ? 0 : optionWidth - 2}px)`,
          width: optionWidth + 8,
        }}
      />
      {options.map((option, index) => (
        <div
          key={option}
          className={`flex text-sm text-center cursor-pointer z-10 select-none`}
          style={{ width: `${optionWidth}px` }}
          onClick={() => handleOptionClick(option, index)}
        >
          <div
            className={`w-full ${
              selectedOption === option
                ? "text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {option}
          </div>
        </div>
      ))}
    </div>
  );
};
