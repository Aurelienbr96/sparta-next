import { InputHTMLAttributes } from "react";

type Props = {} & InputHTMLAttributes<HTMLElement>;

export const Input = ({ className, ...props }: Props) => (
  <input className={"rounded-lg p-4 border-[1px] border-light-gray " + className} {...props} />
);
