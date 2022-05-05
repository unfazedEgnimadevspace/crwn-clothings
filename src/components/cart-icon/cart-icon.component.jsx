import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
}) 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);