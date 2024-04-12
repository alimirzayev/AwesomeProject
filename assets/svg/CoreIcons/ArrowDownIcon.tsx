import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowDownIcon = (props: SvgProps) => (
  <Svg
    width={13}
    height={8}
    viewBox="0 0 13 8"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.272.293a.882.882 0 0 1 1.313 0L6.5 5.586 11.415.293a.882.882 0 0 1 1.313 0c.363.39.363 1.024 0 1.414l-5.571 6a.882.882 0 0 1-1.314 0l-5.571-6a1.055 1.055 0 0 1 0-1.414Z"
      fill="#515D90"
    />
  </Svg>
);
export default ArrowDownIcon;
