import React from "react";
import PropTypes from "prop-types";
import {options} from "./constants.js";

const Card = ({children = "I am a Card", colors = "primary", sizes = "md"}) => {
    return (
        <div>
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