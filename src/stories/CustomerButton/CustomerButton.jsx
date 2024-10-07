import {options} from "./constants.js";
import PropTypes from "prop-types";

const CustomerButton = ({children='Customer Button', colors ='tertiary', sizes='lg'}) => {
    return <button>{children}</button>
}

CustomerButton.propTypes = {
    children: PropTypes.node.isRequired,
    colors: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes)
}

export default CustomerButton;