import {options} from "./constants.js";
import PropTypes from "prop-types";
// import button from "../Button/Button.jsx";

const AdminButton = ({children='admin button', colors='primary', sizes='sm'}) => {
    return <button>{children}</button>
}

AdminButton.propTypes = {
    children: PropTypes.node.isRequired,
    colors: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes)
}


export default AdminButton;