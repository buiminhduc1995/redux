import React, { PureComponent } from "react";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Count from "../srceen/Count/";
import ToDoList from "../srceen/ToDoList/";
import cart from "../srceen/cart/";
import DetailCart from '../srceen/DetailCart/'
const Stack = createStackNavigator ({
  cart:{screen:cart},
  DetailCart:{screen:DetailCart}
})
const Tab = createBottomTabNavigator({
  Count: {
    screen: Count,
    navigationOptions: {
      tabBarLabel: "Đếm"
    }
  },
  ToDoList: {
    screen: ToDoList,
    navigationOptions: {
      tabBarLabel: "Danh sách"
    }
  },
  Stack: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: "Giỏ hàng"
    }
  }
});
const Appcontainer = createAppContainer(Tab);
export default Appcontainer;
