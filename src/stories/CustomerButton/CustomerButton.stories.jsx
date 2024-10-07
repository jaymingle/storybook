import CustomerButton from "./CustomerButton.jsx";
import {options} from "./constants.js";


export default {
    title: 'Customer Button',
    component: CustomerButton
}

export const Default = () => <CustomerButton/>
export const Colors = () => options.colors.map((color, index) => <CustomerButton key={index} color={color}/>)
export const Sizes = () => options.sizes.map((size, index) => <CustomerButton key={index} size={size}/>)