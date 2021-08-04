import React from 'react'
import { Image, FlatList, Text, TouchableOpacity,View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native"

const data = [
    {
        id: "123",
        title: "Find a Cab",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        // Subject to future change
        screen: "EatsScreen"
    }
]

export default function NavOptions() {
    const navigation = useNavigation()

    return (
        <View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`}>
                        <View>
                            <Image
                                style={{width: 120, height: 120, resizeMode: "contain"}}
                                source={{uri: item.image}}
                            />
                        </View>
                        <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                        <Icon style={tw`p-2 bg-black rounded-full w-10 mt-2`} name="arrowright" color="white" type="antdesign" />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}