import TestButton from "./TestButton.jsx";
import {options} from "./constants.js";


export default{
    title: 'Test Button',
    component: TestButton
}

export const Default = () => <TestButton/>
export const Colors = () => options.colors.map((color, index) => <TestButton color={color} index={index}/>)
export const Sizes = () => options.sizes.map((size, index) => <TestButton size={size} index={index}/>)