import React from "react";

interface LongButtonProps {
  value: string;
  widthClass?: string;
  aling?: string; // optional prop to override default Tailwind width
}

const LongButton = ({
  value,
  widthClass = "w-30",
  aling = "justify-end",
}: LongButtonProps) => {
  return (
    <div
      className={`group flex h-18 flex-col justify-end gap-2 rounded-xl border-t-3 border-r-3 border-slate-300/10 bg-black py-2 shadow-2xl shadow-white transition-all duration-100 ease-in-out hover:scale-97 hover:border-0 hover:shadow-black ${widthClass} cursor-pointer`}
    >
      <div className={`${aling} ml-4 flex w-[80%] text-white`}>{value}</div>
    </div>
  );
};

export default LongButton;
