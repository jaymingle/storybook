import AdminButton from "./AdminButton";
import {options} from "./constants.js"

export default {
    title: "Admin Button",
    component: AdminButton
}

export const Default = () => <AdminButton/>
export const Colors = () => options.colors.map((color, index) => <AdminButton key={index} color={color}/>)
export const Sizes = () => options.sizes.map((size, index) => <AdminButton key={index} size={size}/>)