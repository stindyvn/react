import React from "react";
import {ActivityIndicator, View, TouchableOpacity} from "react-native";
import Text from "./Text";
import PropTypes from "prop-types";

function Button(props) {
    const style = {
        paddingVertical: props.paddingVertical,
        paddingHorizontal: props.paddingHorizontal,
        backgroundColor: props.background,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        ...props.style
    }
    if (props.progress) {
        return <View style={style}>
            <ActivityIndicator color={props.color} />
        </View>
    }
    return <TouchableOpacity onPress={props.onPress} style={{
        ...style,
        backgroundColor: "red"
    }}>
        <Text style={{
            color: props.color,
            fontSize: 17,
            fontWeight: "600"
        }}>{props.children}</Text>
    </TouchableOpacity>;
}

Button.defaultProps = {
    color: "white",
    background: "red",
    paddingVertical: 15,
    paddingHorizontal: 10,
    progress: false,
    onPress: null
}

Button.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    paddingVertical: PropTypes.number,
    paddingHorizontal: PropTypes.number,
    progress: PropTypes.bool,
    onPress: PropTypes.func
}

export default Button;