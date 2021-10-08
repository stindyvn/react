import React from "react";
import {ScrollView as ScrollViewReact} from "react-native";
import PropTypes from "prop-types";

function ScrollView (props){
    if (props.hidden) return <></>;
    return <ScrollViewReact
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
            flexGrow: 1,
            justifyContent: props.verticalAlign,
            alignItems: props.horizontalAlign,
            ...props.style
        }}
        {...props}
    />;
}

ScrollView.defaultProps = {
    hidden: false,
    verticalAlign: "flex-start",
    horizontalAlign: "stretch",
}

ScrollView.propTypes = {
    verticalAlign: PropTypes.string,
    horizontalAlign: PropTypes.string,
    hidden: PropTypes.bool
};
export default ScrollView;