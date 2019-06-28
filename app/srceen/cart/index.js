import React, { PureComponent } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { dataProduct } from "../../constant/data";
import styles from "./cart.style";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {add_cart} from '../../redux/action/cart'
class index extends PureComponent {
  AddCart =(item)=>{
    this.props.add_cart(item)
   }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Số lượng giỏ hàng của bạn là :{this.props.number}</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailCart')}>
            <Text>Đi tới giỏ hàng của bạn</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={dataProduct}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                 <Text>{item.name}</Text>
                 <TouchableOpacity
              onPress={()=>this.AddCart(item)}
              style={styles.list}>
               <Text>Mua hàng</Text>
              </TouchableOpacity>
              </View>
             
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
