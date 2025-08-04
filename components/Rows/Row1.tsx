import React from "react";
import Button from "../Button";
import {
  FastForward,
  Mic,
  Moon,
  Search,
  SkipForward,
  SunDim,
  Table2,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { IconComponent } from "../Button";
import { SunMedium } from "lucide-react";
import LongButton from "../LongButton";
import Finger from "../Finger";

const Row1 = () => {
  return (
    <div className="mb-1 flex w-fit gap-1">
      <LongButton value="esc" aling="justify-start" />
      <Button Icon={SunDim as IconComponent} KeyName="F1" single={false} />
      <Button Icon={SunMedium as IconComponent} KeyName="F2" single={false} />
      <Button Icon={Table2 as IconComponent} KeyName="F3" single={false} />
      <Button Icon={Search as IconComponent} KeyName="F4" />
      <Button Icon={Mic as IconComponent} KeyName="F5" />
      <Button Icon={Moon as IconComponent} KeyName="F6" />
      <Button Icon={FastForward as IconComponent} KeyName="F7" />
      <Button Icon={SkipForward as IconComponent} KeyName="F8" />
      <Button Icon={FastForward as IconComponent} KeyName="F9" />
      <Button Icon={VolumeX as IconComponent} KeyName="F10" />
      <Button Icon={Volume1 as IconComponent} KeyName="F11" />
      <Button Icon={Volume2 as IconComponent} KeyName="F12" />
      <Finger />
    </div>
  );
};

export default Row1;
