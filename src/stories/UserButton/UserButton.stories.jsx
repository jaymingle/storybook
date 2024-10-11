import {options} from "./constants.js";
import UserButton from "./UserButton.jsx";

export default{
    title: "UserButton",
    component: UserButton
}

export const Default = () => <UserButton/>
export const Colors = () => options.colors.map((color, index) => <UserButton key={index} color={color}/>)
export const Sizes = () => options.colors.map((size, index) => <UserButton key={index} size={size}/>)