import React from 'react';
import {options} from "./constants.js";
import PropTypes from "prop-types";

const UserButton = ({children='User Button', colors='primary', sizes='sm'}) => {
    return (
        <button>
            {children}
        </button>
    );
};

UserButton.propTypes = {

}

export default UserButton;