import React from "react";

const Finger = () => {
  return (
    <div className="flex h-18 w-18 cursor-pointer flex-col content-center items-center justify-center gap-2 rounded-xl border-t-3 border-r-3 border-slate-300/10 bg-black px-7 py-2 shadow-2xl shadow-white transition-transform duration-100 hover:scale-95 hover:border-0 hover:shadow-none">
      <div className="h-10 w-10 rounded-full border-t-2 border-b-2 border-slate-300/10 bg-black"></div>
    </div>
  );
};

export default Finger;
