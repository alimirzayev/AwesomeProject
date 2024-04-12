import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ArrowLeftIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="m15 18-6-6 6-6"
      stroke="#10121E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowLeftIcon;
