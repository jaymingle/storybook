import React from "react";
import PropTypes from "prop-types";
import {options} from "./constants.js";

export const Card = ({children, colors = "primary", sizes = "md"}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Card.PropTypes = {
    children: PropTypes.node.isRequired,
    colors: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes),
}