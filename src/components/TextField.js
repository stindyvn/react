import React from "react";
import {Platform, View, TextInput} from "react-native";
import PropTypes from "prop-types";

function TextField(props) {
    const outline = Platform.OS === "web" && {outlineStyle: "none"};
    return <View style={{
        backgroundColor: props.background,
        borderRadius: 10,
        ...props.style
    }}>
        <TextInput
            keyboardType={props.keyboardType}
            style={{
                paddingRight: 15,
                paddingLeft: 15,
                height: 50,
                fontSize: 16,
                fontWeight: "500",
                textAlign: props.align,
                color: props.color,
                ...outline
            }}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            autoCorrect={false}
        />
        {props.children}
    </View>;
}

TextField.defaultProps = {
    color: null,
    background: "#f6f6f6",
    placeholder: null,
    value: null,
    onChangeText: null,
    keyboardType: "default",
    align: "left"
}

TextField.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    align: PropTypes.string,
}

export default TextField;