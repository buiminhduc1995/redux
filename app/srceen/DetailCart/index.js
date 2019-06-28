import React, { PureComponent } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {removeItem} from '../../redux/action/cart'
class index extends PureComponent {
    removeProduct = (item) => {
        this.props.removeItem(item)
        console.log('====================================');
        console.log();
        console.log('====================================');
    }
    render() {
        console.log('====================================')
        console.log(this.props.array)
        console.log('====================================')
        return (
            <View>
                <Text>Số lượng mặt hàng hiện có trong giỏ hàng là:{this.props.number}</Text>
                <FlatList
                    data={this.props.array}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View>
                            <TouchableOpacity onPress={()=>this.removeProduct(item)}>
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
        number: state.cart.value,
        array:state.cart.array 
    };
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            removeItem
        },
        dispatch
    );
export default connect(mapStateToProps,
    mapDispatchToProps)(index);