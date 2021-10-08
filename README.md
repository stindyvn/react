# [@stindy/react](https://github.com/stindy/react/) &middot; [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)

This is a library included some base component custom for React Native project.

## Installation

Using NPM:
```shell
$ npm i @stindy/react
```

Using Yarn/Expo:
```shell
$ expo add @stindy/react
```

## Usage

```jsx
import * as Base from "@stindy/react";

<Base.Screen safeArea={true} statusbar="auto">
    <Base.Container hidden={false} verticalAlign="flex-start" horizontalAlign="stretch">
        <Base.ScrollView hidden={false} verticalAlign="flex-start" horizontalAlign="stretch">
            <Base.Column hidden={false}>
                <Base.Row hidden={false}>
                    <Base.Text size={17} color="red" weight="500" font="Arial">
                        Custom Text
                    </Base.Text>
                    <Base.SizedBox height={30} width="100%">
                    <Base.TextField 
                        value="Content" 
                        placeholder="Enter your content"
                        onChangeText={(value)=>{
                            console.log(`Changed: ${value}`);
                        }}
                    />
                    <Base.SizedBox height={30}>
                    <Base.Button 
                        progress={true}
                        onPress={()=>{
                            console.log(`Clickable is disabled when progress == true`);
                        }}>
                        Action
                    </Base.Button>
                </Base.Row>
            </Base.Column>
        </Base.ScrollView>
    </Base.Container>
</Base.Screen>
```