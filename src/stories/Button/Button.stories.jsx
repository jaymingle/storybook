import Button from './Button'
import {options} from "./constants.js";

export default {
    title: 'Button',
    component: Button
}

export const Default = () => <Button/>
export const Colors = () => options.colors((color, index) => <Button key={index} color={color}/>)
export const Sizes = () => options.size((size, index) => <Button key={index} size={size}/>)