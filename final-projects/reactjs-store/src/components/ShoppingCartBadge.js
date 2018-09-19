import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge, Icon } from 'antd'


class ShoppingCartTotalMoney extends Component {
  render() {
    return (
      <Badge count={this.props.addedProducts.length}>
        <Icon style={{ fontSize: 24 }} type="shopping-cart" />
      </Badge>
    )
  }
}



const mapStateToProps = (state) => ({
  addedProducts: state.shoppingCartReducer.addedProducts,
  // total: state.shoppingCartReducer.total,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTotalMoney);
