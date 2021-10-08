import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";

function Column (props){
    if (props.hidden) return <></>;
    return <View
        {...props}
        style={{
            flexDirection: "column",
            ...props.style
        }}
    />;
}

Column.defaultProps = {
    hidden: false
}

Column.propTypes = {
    hidden: PropTypes.bool
};

export default Column;