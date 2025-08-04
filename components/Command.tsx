import React from "react";
import type { SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

interface ButtonProps {
  Icon?: IconComponent | string;
  keyName?: IconComponent | string;
  single?: boolean;
}

const Button = ({ Icon, keyName, single }: ButtonProps) => {
  const iconSize = { width: 10, height: 15, color: "white" };

  return (
    <div className="flex h-18 w-21 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-t-3 border-r-3 border-slate-300/10 bg-black px-7 py-2 shadow-2xl shadow-white transition-transform duration-100 hover:scale-95 hover:border-0 hover:shadow-none">
      {!single && (
        <div className="flex w-full items-center justify-center">
          {typeof Icon === "string" ? (
            <span className="text-lg text-white">{Icon}</span>
          ) : (
            Icon && <Icon {...iconSize} />
          )}
        </div>
      )}
      <div className="flex w-full items-center justify-center">
        {typeof keyName === "string" ? (
          <span className="text-[14px] text-white">{keyName}</span>
        ) : (
          keyName &&
          (() => {
            const KeyIcon = keyName;
            return <KeyIcon {...iconSize} />;
          })()
        )}
      </div>
    </div>
  );
};

export default Button;
