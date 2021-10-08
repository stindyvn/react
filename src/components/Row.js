import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";

function Row (props){
    if (props.hidden) return <></>;
    return <View
        {...props}
        style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: props.verticalAlign,
            alignItems: props.horizontalAlign,
            ...props.style
        }}
    />;
}

Row.defaultProps = {
    verticalAlign: "flex-start",
    horizontalAlign: "stretch",
    hidden: false
}

Row.propTypes = {
    verticalAlign: PropTypes.string,
    horizontalAlign: PropTypes.string,
    hidden: PropTypes.bool
};

export default Row;