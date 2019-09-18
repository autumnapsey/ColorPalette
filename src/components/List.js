// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import styles from './List.css';
import fetchColors from '../actions/fetchColors';
import ColorSquare from './ColorSquare';

// TODO: generate large number of unique colors on the backend,
//  fetch a number of colors instead of all,
//  implement load more button or infinite scroll to fetch more colors

const enhance = compose(
  connect(
    ({ colorOptions }) => ({ colorOptions }),
    {
      populateColorOptions: colors => ({
        type: 'POPULATE_COLOR_OPTIONS',
        colors,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      fetchColors().then(res => this.props.populateColorOptions(res));
    },
  }),
);

const List = ({ colorOptions }) => (
  <div className={styles.list}>
    {colorOptions.map(option => (
      <ColorSquare color={option} key={option} />
    ))}
  </div>
);

export default enhance(List);
