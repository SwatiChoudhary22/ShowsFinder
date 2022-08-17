import { FC, memo, HTMLAttributes } from "react";
import cn from "classnames";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

const H1: FC<H1Props> = ({ children, className }) => {
  return (
    <h1
      className={cn(
        "text-4xl lg:text-7xl md:text-6xl text-blue-650 font-bold tracking-wider leading-10 drop-shadow-2xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

H1.defaultProps = {};

export default memo(H1);
