import React, { PureComponent } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { dataProduct } from "../../constant/data";
import styles from "./cart.style";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {add_cart} from '../../redux/action/cart'
class index extends PureComponent {
  AddCart =()=>{
    this.props.add_cart()
   }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Số lượng giỏ hàng của bạn là :{this.props.number}</Text>
          <TouchableOpacity>
            <Text>Đi tới giỏ hàng của bạn</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={dataProduct}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
              onPress={()=>this.AddCart()}
              style={styles.list}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    number:state.cart.value
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add_cart
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
