import { Alert, TouchableOpacity } from "react-native";
import { IScreenHeaderProps } from "../ScreenHead.types";
import { Fragment, useRef, useState } from "react";
import Box from "../../../atoms/Box";

const ScreenHeaderRight = ({ RightContent, onPress }: IScreenHeaderProps) => {
  return (
    <Fragment>
      <Box
        alignItem="center"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <TouchableOpacity onPress={() => Alert.alert("Coming Soon")}>
          <Box>
            
          </Box>
        </TouchableOpacity>
      </Box>
    </Fragment>
  );
};

export default ScreenHeaderRight;
