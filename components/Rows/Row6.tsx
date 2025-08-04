import React from "react";
import Button, { IconComponent } from "../Button";
import Comm from "../Command";
import { ChevronUp, Command, Globe, Option } from "lucide-react";
import Space from "../Space";
import Arrow from "../Arrow";
import { RxTriangleLeft } from "react-icons/rx";
import { RxTriangleUp } from "react-icons/rx";
import { RxTriangleDown } from "react-icons/rx";
import { RxTriangleRight } from "react-icons/rx";

const Row6 = () => {
  return (
    <div className="mb-1 flex w-fit gap-1">
      <Button Icon="fn" KeyName={Globe as IconComponent} single={false} />
      <Button
        Icon={ChevronUp as IconComponent}
        KeyName="control"
        single={false}
      />
      <Button Icon={Option as IconComponent} KeyName="option" single={false} />
      <Comm Icon={Command as IconComponent} keyName="command" single={false} />
      <Space />
      <Comm Icon={Command as IconComponent} keyName="command" single={false} />
      <Button Icon={Option as IconComponent} KeyName="option" single={false} />
      <div className="flex h-17 w-60 flex-col justify-center gap-0.5">
        <div className="flex justify-center">
          <Arrow Icon={RxTriangleUp} />
        </div>
        <div className="flex h-fit w-full justify-center gap-1">
          <Arrow Icon={RxTriangleLeft} />
          <Arrow Icon={RxTriangleDown} />
          <Arrow Icon={RxTriangleRight} />
        </div>
      </div>
    </div>
  );
};

export default Row6;
