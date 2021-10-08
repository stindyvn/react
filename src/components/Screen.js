import React from "react";
import PropTypes from "prop-types";
import {Platform, KeyboardAvoidingView, SafeAreaView} from "react-native";
import {StatusBar} from "expo-status-bar";

function Screen (props){
    const behavior = Platform.OS === "ios" ? "padding" : "height";
    return props.safeArea ?
        <>
            <StatusBar style={props.statusbar}/>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: "white",
                    ...props.style
                }}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={behavior}
                    enabled
                    {...props}
                />
            </SafeAreaView>
        </> :
        <>
            <StatusBar style={props.statusbar}/>
            <KeyboardAvoidingView
                style={{ flex: 1, ...props.style }}
                behavior={behavior}
                enabled
                {...props}
            />
        </>
}

Screen.defaultProps = {
    safeArea: true,
    statusbar: "auto"
}
Screen.propTypes = {
    safeArea: PropTypes.bool,
    statusbar: PropTypes.string
};

export default Screen;