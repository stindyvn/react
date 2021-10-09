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
import {Screen, Container, ScrollView, Column, Row, Text, SizedBox, TextField, Button} as Base from "@stindy/react";

<Screen safeArea={true} statusbar="auto">
    <Container hidden={false} verticalAlign="flex-start" horizontalAlign="stretch">
        <ScrollView hidden={false} verticalAlign="flex-start" horizontalAlign="stretch">
            <Column hidden={false}>
                <Row hidden={false}>
                    <Text size={17} color="red" weight="500" font="Arial">
                        Custom Text
                    </Text>
                    <SizedBox height={30} width="100%">
                    <TextField 
                        value="Content" 
                        placeholder="Enter your content"
                        onChangeText={(value)=>{
                            console.log(`Changed: ${value}`);
                        }}
                    />
                    <SizedBox height={30}>
                    <Button 
                        progress={true}
                        onPress={()=>{
                            console.log(`Clickable is disabled when progress == true`);
                        }}>
                        Action
                    </Button>
                </Row>
            </Column>
        </ScrollView>
    </Container>
</Screen>
```