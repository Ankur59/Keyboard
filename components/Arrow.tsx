import { LucideIcon } from "lucide-react";
import React from "react";
import { IconType } from "react-icons";

const Arrow = ({ Icon }: { Icon: IconType }) => {
  return (
    <div className="flex h-8 w-19 cursor-pointer flex-col content-center items-center justify-center gap-2 rounded-xl border-t-3 border-r-3 border-slate-300/10 bg-black px-7 py-2 shadow-2xl shadow-white transition-transform duration-100 hover:scale-93 hover:border-0 hover:shadow-none">
      <Icon width={10} height={7} color="white" />
    </div>
  );
};

export default Arrow;
