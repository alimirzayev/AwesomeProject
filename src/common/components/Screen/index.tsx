import {
  Keyboard,
  TouchableWithoutFeedback,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { Fragment, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { IScreenProps } from "./Screen.types";
import { Colors } from "../../../theme";

const Screen = ({
  header,
  children,
  onPullToRefresh,
  bounces,
  bgColor,
  keyboardAwareScroll
}: IScreenProps) => {
  const [refreshing, setRefreshing] = useState(false);

  const startRefreshing = () => {
    setRefreshing(true);
    onPullToRefresh && onPullToRefresh(stopRefreshing);
  };

  const stopRefreshing = () => {
    setRefreshing(false);
  };

  const KeyboardAwareScroll = () => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: bgColor ? bgColor : Colors.primary.white,
        }}
      >
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={bounces ?? false}
          refreshControl={
            onPullToRefresh && (
              <RefreshControl
                style={{ backgroundColor: bgColor ? bgColor : Colors.primary.white }}
                refreshing={refreshing}
                onRefresh={startRefreshing}
              />
            )
          }
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: bgColor ? bgColor : Colors.primary.white,
          }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Fragment>
              {header}
              {children}
            </Fragment>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    )
  }

  const ScreenComponent = () => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: bgColor ? bgColor : Colors.primary.white,
        }}
      >
        <Fragment>
          {header}
          {children}
        </Fragment>
      </SafeAreaView>
    )
  }

  return (
    keyboardAwareScroll ? <KeyboardAwareScroll /> : <ScreenComponent />
  );
};

export default Screen;
