import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListView from "./src/screens/List";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import GenerateColorScreen from "./src/screens/GenerateColor";
import SquareColorScreen from "./src/screens/SquareColorScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import BoxScreenTask from "./src/screens/BoxScreenTask";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    List: ListView,
    Image: ImageScreen,
    Counter: CounterScreen,
    GenerateColor: GenerateColorScreen,
    SquareColor: SquareColorScreen,
    TextInput: TextScreen,
    Box: BoxScreen,
    BoxTask: BoxScreenTask
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);


