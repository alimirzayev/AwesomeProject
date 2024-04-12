import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
const CloseIcon = (props: SvgProps) => (
  <Svg
    width={13}
    height={13}
    viewBox="0 0 13 13"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="m7.494 6.344 4.932-4.932a.82.82 0 1 0-1.16-1.16L6.333 5.183 1.401.25a.82.82 0 1 0-1.16 1.16l4.932 4.933L.24 11.276a.82.82 0 1 0 1.16 1.16l4.932-4.932 4.933 4.933a.818.818 0 0 0 1.16 0 .82.82 0 0 0 0-1.16L7.494 6.343Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h12.667v12.667H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CloseIcon;
