import {View, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ICustomStatusBarProps {
  backgroundColor?: string;
  barStyle: 'dark-content' | 'light-content';
}

const CustomStatusBar = ({
  backgroundColor,
  barStyle,
}: ICustomStatusBarProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{height: insets.top, backgroundColor: backgroundColor || '#fff'}}>
      <StatusBar
        animated
        backgroundColor={backgroundColor || '#fff'}
        barStyle={barStyle}
      />
    </View>
  );
};

export default CustomStatusBar;
