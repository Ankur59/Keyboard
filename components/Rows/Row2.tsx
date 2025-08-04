import { SunDim } from "lucide-react";
import React from "react";
import Button from "../Button";
import LongButton from "../LongButton";

const Row2 = () => {
  return (
    <div className="mb-1 flex w-fit gap-1">
      <Button Icon="~" KeyName="`" single={false} />
      <Button Icon="!" KeyName="1" single={false} />
      <Button Icon="@" KeyName="2" single={false} />
      <Button Icon="#" KeyName="3" single={false} />
      <Button Icon="$" KeyName="4" single={false} />
      <Button Icon="%" KeyName="5" single={false} />
      <Button Icon="^" KeyName="6" single={false} />
      <Button Icon="&" KeyName="7" single={false} />
      <Button Icon="*" KeyName="8" single={false} />
      <Button Icon="(" KeyName="9" single={false} />
      <Button Icon=")" KeyName="10" single={false} />
      <Button Icon="_" KeyName="-" single={false} />
      <Button Icon="+" KeyName="=" single={false} />
      <LongButton value="delete" />
    </div>
  );
};

export default Row2;
