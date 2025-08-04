import React from "react";
import Button from "../Button";
import LongButton from "../LongButton";

const Row5 = () => {
  return (
    <div className="mb-1 flex w-fit gap-1">
      <LongButton value="shift" widthClass="w-42.5" aling="justify-start" />
      <Button KeyName="Z" single={true} />
      <Button KeyName="X" single={true} />
      <Button KeyName="C" single={true} />
      <Button KeyName="V" single={true} />
      <Button KeyName="B" single={true} />
      <Button KeyName="N" single={true} />
      <Button KeyName="M" single={true} />
      <Button Icon="<" KeyName="," single={false} />
      <Button Icon=">" KeyName="." single={false} />
      <Button Icon="?" KeyName="/" single={false} />
      <LongButton value="shift" widthClass="w-42.5" />
    </div>
  );
};

export default Row5;
