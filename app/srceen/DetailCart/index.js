import React, { PureComponent } from 'react';
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class index extends PureComponent {
    render() {
        return (
            <View>
                <Text>Số lượng mặt hàng hiện có trong giỏ hàng là:{this.props.number}</Text>
                <FlatList
                    data={this.props.array}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        number: state.cart.value
      array: state.cart.array
    };
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
        },
        dispatch
    );
export default connect(mapStateToProps,
    mapDispatchToProps)(index);