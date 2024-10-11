import React from "react";
import PropTypes from "prop-types";
import {options} from "./constants.js";

import './Card.css'
import classNames from "classnames";

const Card = ({children = "I am a Card", color = "primary", size = "md"}) => {
    return (
        <div className={classNames('card', {
            [`color-${color}`]: color,
            [`size-${color}`]: size,

        })}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    colors: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes),
}

export default Card;