import React, { PureComponent } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import styles from "./TodoList.style";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { add } from "../../redux/action/todo";
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  Add = () => {
    if (this.state.input.length > 0) {
      this.props.add(this.state.input);
      this.setState({ input: "" });
    }
  };
  toggle = () => {
    console.log("====================================");
    console.log("toggle");
    console.log("====================================");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            placeholder="Input"
            style={{ width: 200, height: 50 }}
            value={this.state.input}
            onChangeText={txt => this.setState({ input: txt })}
          />
          <TouchableOpacity onPress={() => this.Add()}>
            <Text>Thêm mới</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity>
          <Text>Hiển thị các công việc hoàn thành</Text>
        </TouchableOpacity>
        <TouchableOpacity>
              <Text>Hiển thị các công việc chưa hoàn thành</Text>
        </TouchableOpacity> */}
        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity onPress={() => this.toggle()}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.todo.array
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
