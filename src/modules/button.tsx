import React from "react";
import { CN } from "@/utils/class-merge";

/* ---------------------------------------------------------------- */

export type ButtonShape = {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  onClick?: (e: any) => void;
  props?: any;
};

/**
 *
 * @param {text} string
 * @param {className} string
 * @param {children} ReactNode
 *
 * @returns ReactElement
 */
export default function Button({
  text,
  children,
  className,
  type = "button",
  onClick,
  ...props
}: ButtonShape) {
  const defaultStyle =
    "w-full sm:w-[340px] h-[4.624rem] py-[1.5rem] pl-[4rem] pr-[2rem] cursor-pointer";

  return (
    <button
      type={type}
      className={CN(defaultStyle, className)}
      onClick={onClick}
      {...props}
    >
      {text ? <span>{text}</span> : children}
    </button>
  );
}
