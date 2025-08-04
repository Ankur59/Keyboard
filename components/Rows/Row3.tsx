import React from "react";
import Button from "../Button";
import LongButton from "../LongButton";

const Row3 = () => {
  return (
    <div className="mb-1 flex w-fit gap-1">
      <LongButton value="tab" aling="justify-start" />
      <Button KeyName="Q" single={true} />
      <Button KeyName="W" single={true} />
      <Button KeyName="E" single={true} />
      <Button KeyName="R" single={true} />
      <Button KeyName="T" single={true} />
      <Button KeyName="Y" single={true} />
      <Button KeyName="U" single={true} />
      <Button KeyName="I" single={true} />
      <Button KeyName="0" single={true} />
      <Button KeyName="P" single={true} />
      <Button Icon="{" KeyName="[" single={false} />
      <Button Icon="}" KeyName="]" single={false} />
      <Button Icon="|" KeyName="\" single={false} />
    </div>
  );
};

export default Row3;
