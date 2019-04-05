import React, { PureComponent } from "react";
import { View, Text ,TouchableOpacity } from "react-native";
import styles from "./count.style";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {increase,decrease} from '../../redux/action/count'
class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { value } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.increase()}>
            <Text>+</Text>
        </TouchableOpacity>
        <Text>{value}</Text>
        <TouchableOpacity onPress={()=>this.props.decrease()}>
            <Text>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    value: state.count.value
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        decrease,
        increase
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(index);
