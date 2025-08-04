import React from "react";
import Button from "../Button";
import CapsLock from "../CapsLock";
import LongButton from "../LongButton";

const Row4 = () => {
  return (
    <div className="mb-1 flex w-fit gap-1">
      <CapsLock light={true} value="caps lock" />
      <Button KeyName="A" single={true} />
      <Button KeyName="S" single={true} />
      <Button KeyName="D" single={true} />
      <Button KeyName="F" single={true} />
      <Button KeyName="G" single={true} />
      <Button KeyName="H" single={true} />
      <Button KeyName="J" single={true} />
      <Button KeyName="K" single={true} />
      <Button KeyName="L" single={true} />
      <Button Icon=":" KeyName=";" single={false} />
      <Button Icon='"' KeyName="'" single={false} />
      <LongButton value="return" />
    </div>
  );
};

export default Row4;
