import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LockIcon from "../atoms/svg/LockIcon";

const Cards = ({data}) => {
    const [hideLock, setHideLock] = useState(false);
    const handlePress = () => {
        setHideLock(true);
      };
    return(
        <>
        <TouchableOpacity onPress={handlePress}>
        <View className="h-[30vh] w-[19vw] rounded-3xl">
            <View className="flex-row justify-center h-[100%] items-center">
                <View style={hideLock && {display: 'none'}} className="bg-white p-2 rounded-md">
                    <LockIcon/>
                </View>
            </View>
        </View>
        <View className="absolute h-[100%] w-[100%] z-[-10]">
            <Image className="rounded-3xl" style={{ height: '100%', width: '100%' }} source={{ uri: data.image }} ></Image>
        </View>
        </TouchableOpacity>
        <View className="flex-row justify-center">
            <Text style={styles.outlineText} className="text-black text-xl">{data.letter} Letter</Text>
        </View>
        </>
    )
}

const styles = {
    outlineText: {
      fontSize: 24,
      color: 'white',
      textShadowColor: 'black',
      textShadowOffset: { width: 2, height: 2 }, // Shadow offset
      textShadowRadius: 1, // Shadow radius
    }
  };

export default Cards;