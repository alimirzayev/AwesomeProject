import { isIos, isTablet } from "../../../constants/device";
import { IScreenHeaderProps } from "./ScreenHead.types";
import {
  ScreenHeaderRight,
  ScreenHeaderLeft,
  ScreenHeaderCenter,
} from "./components";
import { Box } from "../../atoms";

const ScreenHeader = ({
  LeftContent,
  RightContent,
  title,
  goBack,
  logo,
  onPress,
  bgColor,
  navigateTo,
  closeIcon,
  onBackPress,
}: IScreenHeaderProps) => {
  return (
    <Box
      position="fixed"
      top={0}
      w={"100%"}
      variant="horizontal"
      px={24}
      pt={isTablet ? 10 : isIos ? 4 : 16}
      pb={isTablet ? 24 : 12}
      bgColor={bgColor ? bgColor : "white"}
      borderBW={1}
      borderBC={"#EDEDED"}
      zIndex={99}
    >
      <ScreenHeaderLeft
        logo={logo}
        goBack={goBack}
        LeftContent={LeftContent}
        title={title}
        navigateTo={navigateTo}
        closeIcon={closeIcon}
        onBackPress={onBackPress}
      />

      <Box
        position="absolute"
        alignItem="center"
        justifyContent="center"
        top={logo ? 14 : isTablet ? 18 : 7}
        left={"0"}
        right={"0"}
        zIndex={-1}
      >
        <ScreenHeaderCenter title={title} />
      </Box>

      <ScreenHeaderRight RightContent={RightContent} onPress={onPress} />
    </Box>
  );
};

export default ScreenHeader;
