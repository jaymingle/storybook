import TestButton from "./TestButton.jsx";
import {options} from "./constants.js";


export default{
    title: 'Test Button',
    component: TestButton
}

const Default = () => <TestButton/>
const Colors = () => options.colors.map((color, index) => <TestButton color={color} index={index}/>)