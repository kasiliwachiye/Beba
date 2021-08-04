import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';

import NavOptions from '../components/NavOptions'

export default function HomeScreen() {
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image 
                    source={{uri:"https://links.papareact.com/gzs"}} 
                    style={{height: 100, width: 100, resizeMode: 'contain'}}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
