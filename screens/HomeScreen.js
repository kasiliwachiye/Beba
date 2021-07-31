import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    source={{uri:"https://links.papareact.com/gzs"}} 
                    style={{height: 100, width: 100, resizeMode: 'contain'}}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
