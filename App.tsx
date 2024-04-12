import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './src/navigation';
import { LogBox } from 'react-native';
import CustomStatusBar from './src/common/components/CustomStatusBar/CustomStatusBar';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs(true);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CustomStatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
