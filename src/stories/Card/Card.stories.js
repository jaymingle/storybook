import Card from "./Card.js";
import {options} from "./constants.js";

export default {
    title: 'Card',
    component: Card,
}

export const Default = () => <Card />
export const Colors = () => options.colors.map((color, index) => <Card key={index} color={color}/>)
export const Sizes = () => options.sizes.map((size, index) => <Card key={index} size={size}/>)