import Button from './Button'
import {options} from "./constants.js";

export default {
    title: 'Button',
    component: Button
}

export const Default = () => <Button/>
export const Colors = () => options.colors.map((color, index) => <Button key={index} color={color}/>)
export const Sizes = () => options.sizes.map((size, index) => <Button key={index} size={size}/>)