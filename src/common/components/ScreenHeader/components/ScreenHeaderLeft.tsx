import { Image, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { IScreenHeaderProps } from "../ScreenHead.types";
import {RootStackParamList } from "../../../../models";
import { isTablet } from "../../../../constants/device";
import { ArrowLeftIcon } from "../../../../../assets";

const ScreenHeaderLeft = ({
  logo,
  goBack,
  LeftContent,
  navigateTo,
  onBackPress,
}: IScreenHeaderProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <>
      {logo ? (
        <Image
          style={{ width: 35, height: 35 }}
          source={require("../../../../../assets/images/logo.png")}
        />
      ) : goBack ? (
        <TouchableOpacity
          style={{ padding: isTablet ? 10 : 1 }}
          onPress={() => {
            if (onBackPress) {
              onBackPress(); // Custom back press function
            } else if (navigateTo) {
              navigation.navigate(navigateTo); // Pass Screen Name
            } else {
              navigation.goBack(); // Default Go Back
            }
          }}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
      ) : LeftContent ? (
        LeftContent
      ) : null}
    </>
  );
};

export default ScreenHeaderLeft;
