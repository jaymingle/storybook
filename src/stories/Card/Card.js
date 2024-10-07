import PropTypes from "prop-types";

export const Card = ({children, colors, sizes}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Card.PropTypes = {
    children: PropTypes.node.isRequired,
    colors: PropTypes.oneOf(options.colors),
    sizes: PropTypes.oneOf(options.sizes),
}