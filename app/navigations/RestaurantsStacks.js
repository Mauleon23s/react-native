import { createStackNavigator } from "react-navigation-stack";
import RestaurantsScreens from "../screens/Restaurants";

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreens,
    navigationOptions: () => ({
      title: "Pagina 1"
    })
  }
});

export default RestaurantsScreenStacks;
