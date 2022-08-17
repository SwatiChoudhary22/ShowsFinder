import { FC, memo, HTMLAttributes } from "react";
import cn from "classnames";
import classNames from "classnames";
type H3Props = HTMLAttributes<HTMLHeadingElement>;

const H3: FC<H3Props> = ({ children }) => {
  return (
    <h3
      className={cn(
        "text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-700 ",
        classNames
      )}
    >
      {children}
    </h3>
  );
};

H3.defaultProps = {};

export default memo(H3);
