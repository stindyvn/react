import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";

function Container (props){
    if (props.hidden) return <></>;
    return <View
        {...props}
        style={{
            flex: 1,
            justifyContent: props.verticalAlign,
            alignItems: props.horizontalAlign,
            ...props.style
        }}
    />;
}

Container.defaultProps = {
    verticalAlign: "flex-start",
    horizontalAlign: "stretch",
    hidden: false
}

Container.propTypes = {
    verticalAlign: PropTypes.string,
    horizontalAlign: PropTypes.string,
    hidden: PropTypes.bool
};

export default Container;