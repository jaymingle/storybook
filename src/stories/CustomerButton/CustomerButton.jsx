import {options} from "./constants.js";
import button from "../Button/Button.jsx";

const CustomerButton = ({children='Customer Button', colors ='tertiary', sizes='lg'}) => {
    return <button>{children}</button>
}

export default CustomerButton;