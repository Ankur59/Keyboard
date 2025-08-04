import React from "react";
import Button from "./Button";
import { Sun } from "lucide-react";
import Row1 from "./Rows/Row1";
import Row2 from "./Rows/Row2";
import Row3 from "./Rows/Row3";
import Row4 from "./Rows/Row4";
import Row5 from "./Rows/Row5";
import Row6 from "./Rows/Row6";

const Keyboard = () => {
  return (
    <div className="h-fit w-fit overflow-hidden rounded-2xl border-2 border-zinc-800 bg-zinc-800 p-2">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </div>
  );
};

export default Keyboard;
