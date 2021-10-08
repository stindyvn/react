import React from "react";
import {View} from "react-native";

export default function SizedBox(props) {
    return <View style={{
        height: props?.height,
        width: props?.width,
    }}/>;
}