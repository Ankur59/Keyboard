import React from "react";
interface prop {
  light?: boolean;
  value: string;
}
const CapsLock = ({ light, value }: prop) => {
  return (
    <div className="group h-18 w-36 cursor-pointer items-center justify-center gap-2 rounded-xl border-t-3 border-r-3 border-slate-300/10 bg-black py-2 shadow-2xl shadow-white transition-all duration-100 ease-in-out hover:scale-97 hover:border-0 hover:shadow-black">
      {light === true && (
        <div className="ml-5 flex h-4 w-1/2 content-center items-center">
          <div className="h-1 w-1 rounded-full bg-slate-600 transition-colors duration-150 ease-in-out group-hover:bg-[#a3e635] group-hover:shadow-[0_0_8px_2px_#a3e635,0_0_15px_4px_#a3e635]"></div>
        </div>
      )}

      <div className="text-s mt-3 ml-4 h-5 w-[80%] text-white">{value}</div>
    </div>
  );
};

export default CapsLock;
