// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styles from './Cart.css';
import ColorSquare from './ColorSquare';

// TODO: hide trash icon when no hover
//  keep cart colors on refresh
//  STRETCH- add save & naming functionality for palettes

const enhance = compose(connect(({ cartColors }) => ({ cartColors })));

const Cart = ({ cartColors }) => (
  <div className={styles.cart}>
    Your current color palette
    <div className={styles.colors}>
      {cartColors.map(color => (
        <ColorSquare color={color} key={color} />
      ))}
    </div>
  </div>
);

export default enhance(Cart);
