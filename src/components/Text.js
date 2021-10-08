import React from "react";
import {Text as ReactText} from "react-native";
import PropTypes from "prop-types";

function Text(props) {
    if (props.hidden) return <></>;
    return <ReactText
        numberOfLines={props.lines}
        ellipsizeMode={props.overflowMode}
        {...props}
        style={{
            color: props.color,
            backgroundColor: props.background,
            textAlign: props.align,
            fontSize: props.size,
            fontWeight: props.weight,
            fontFamily: props.font,
            ...props.style
        }}
    />;
}

Text.defaultProps = {
    color: null,
    background: null,
    align: "left",
    size: 15,
    weight: "400",
    font: null,
    lines: 0,
    overflowMode: "tail",
    hidden: false
}

Text.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    align: PropTypes.string,
    size: PropTypes.number,
    weight: PropTypes.string,
    font: PropTypes.string,
    lines: PropTypes.number,
    overflowMode: PropTypes.string,
    hidden: PropTypes.bool
};

export default Text;