import { FC, memo, HTMLAttributes } from "react";
import cn from "classnames";
import classNames from "classnames";
type H2Props = HTMLAttributes<HTMLHeadingElement>;

const H2: FC<H2Props> = ({ children }) => {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold leading-6 lg:text-4xl md:text-3xl text-gray-700 tracking-wider",
        classNames
      )}
    >
      {children}
    </h2>
  );
};

H2.defaultProps = {};

export default memo(H2);
