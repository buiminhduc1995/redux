import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import Appcontainer from "./navigation/index";
import store from "./redux/store/";
import { Provider } from "react-redux";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={store}>
        <Appcontainer />
      </Provider>
    );
  }
}

export default App;
