import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false,
      presentation: 'modal',
      animationTypeForReplace: 'push',
      animation: 'slide_from_right',
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  );
}
export default  StackNavigation;