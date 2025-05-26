import clsx from "clsx";
import { twMerge } from "tailwind-merge";
let cn = (...props) => {
  return twMerge(clsx(props));
};
export default cn;
