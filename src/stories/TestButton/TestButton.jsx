import React from 'react';
import {options} from "./constants.js";
import PropTypes from "prop-types";


const TestButton = ({children='Test Button', colors= 'primary', sizes = 'md'}) => {
    return (
        <button>
            {children}
        </button>
    );
};

TestButton.propTypes = {
    children: PropTypes.node.isRequired,
    colors: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes)
}


export default TestButton;