import React from 'react';
import { connect } from "react-redux";
import {compose, withHandlers, withProps } from 'recompose';
import ReactSVG from "react-svg";
import styles from "./ColorSquare.css";
import TrashIcon from "../../design/TrashIcon.svg";

const enhance = compose(
    connect(({ cartColors }) => ({ cartColors }), {
        addColor: color => ({
            type: 'ADD_COLOR',
            color,
        }),
        removeColor:  color => ({
            type: 'REMOVE_COLOR',
            color,
        }),
    }),
    withProps(
        ({ cartColors }) => ({
            inCart: color => cartColors.includes(color),
        })
    ),
    withHandlers({
        updateColor: ({ addColor, removeColor, inCart }) => color => () => {
            inCart(color) ? removeColor(color) : addColor(color)
        },
    }),
);

const ColorSquare = ({ color, updateColor, inCart }) => (
    <div className={`${styles.color} ${inCart(color) ? styles.inCart : ''}`}
         style={{backgroundColor: color}}
         onClick={updateColor(color)}>
        {inCart(color) ? (<ReactSVG src={TrashIcon} className={styles.trash} />) : '' }
        <span>{color}</span>
    </div>
);

export default enhance(ColorSquare);