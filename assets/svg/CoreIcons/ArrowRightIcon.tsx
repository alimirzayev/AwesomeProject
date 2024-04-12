import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowRightIcon = (props: SvgProps) => (
  <Svg
    width={10}
    height={15}
    viewBox="0 0 8 13"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.293 12.728a.882.882 0 0 1 0-1.313L5.586 6.5.293 1.585a.882.882 0 0 1 0-1.313 1.055 1.055 0 0 1 1.414 0l6 5.571c.39.363.39.951 0 1.314l-6 5.571a1.055 1.055 0 0 1-1.414 0Z"
      fill="#515D90"
    />
  </Svg>
);
export default ArrowRightIcon;
