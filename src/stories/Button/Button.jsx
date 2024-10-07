import {options} from "./constants.js";
import PropTypes from "prop-types";

const Button = ({children = 'Button', colors="primary", sizes ="sm"}) => {
    return (
        <button>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    colors: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes)
}

export default Button;


