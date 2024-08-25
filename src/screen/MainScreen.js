import {Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LeftArrow from '../atoms/svg/LeftArrow';
import {globalArray} from '../Constants';
import Cards from '../molecules/Cards';
import Previous from '../atoms/svg/Previous';
import Next from '../atoms/svg/Next';
import { useRef, useState } from 'react';

const MainScreen = () => {
  const scrollViewRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const scrollTo = (direction) => {
    scrollViewRef.current?.scrollTo({
      x: scrollX + (direction === 'left' ? -250 : 250),
      animated: true,
    });
    setScrollX(prev => prev + (direction === 'left' ? -250 : 250));
  };
  return (
      <View className="px-[5%]">
        <View className="flex-row items-center">
          <View className="bg-[#EF3349] p-2 rounded-md">
            <LeftArrow height="20" width="20" />
          </View>
          <Text className="text-2xl text-black ml-10 font-bold">{globalArray[0].heading}</Text>
        </View>

        <View className="mt-[2%]">
        <View>
        <View className="flex-row justify-between">
        <Text className="text-black text-2xl font-bold">{globalArray[0].child1.heading}</Text>
        <View className="flex-row gap-2">
          <TouchableOpacity><Previous onPress={() => scrollTo('left')}/></TouchableOpacity>
          <TouchableOpacity><Next onPress={() => scrollTo('right')}/></TouchableOpacity>
        </View>
        </View>
        <ScrollView ref={scrollViewRef} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row mt-[0.2%]">
        {
          globalArray[0].child1.letters.map((ele,index)=>{
            return <View key={index} className="mr-10"><Cards data={ele}/></View>
          })
        }
        </View>
        </ScrollView>
        </View>
        </View>

        <View className="mt-[2%]">
        <View><Text className="text-black text-2xl font-bold">{globalArray[0].child2.heading}</Text></View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row mt-[0.2%]">
        {
          globalArray[0].child2.letters.map((ele,index)=>{
            return <View key={index} className="mr-10 "><Cards data={ele}/></View>
          })
        }
        </View>
        </ScrollView>
        </View>
      </View>
  );
};

export default MainScreen;
