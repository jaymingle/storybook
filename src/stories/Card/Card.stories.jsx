import Card from "./Card";
import {options} from "./constants.js";

export default {
    title: 'Card',
    component: Card,
}

const Template = args => <Card {...args}/>
export const Default = Template.bind({})
export const Clickable = Template.bind({})
export const Draggable = Template.bind({})


export const Colors = () => options.colors.map((color, index) => <Card key={index} color={color}/>)
export const Sizes = () => options.sizes.map((size, index) => <Card key={index} size={size}/>)