import React from "react";

const Hero = () => {
  return (
    <div className="my-40 flex w-full flex-col items-center justify-items-start">
      <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <div className="my-10 max-w-2xl items-center justify-center">
        <p className="text-center text-xl leading-relaxed font-medium -tracking-normal text-neutral-400">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="relative cursor-pointer rounded-xl border border-neutral-500 px-4 py-2 text-white overflow-hidden">
          Join Waitlist
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
