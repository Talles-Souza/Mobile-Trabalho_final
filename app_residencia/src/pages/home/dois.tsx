import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'

import Carousel from 'react-native-snap-carousel'


const SLIDE_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDE_WIDTH * 0.88

type props = {
    item:{
        imgUrl: string
    }
    index: number
}

const carouselItems = [
    {
        imgUrl:
        'https://live.staticflickr.com/65535/51928914611_7ab377696e_4k.jpg'
    },
    {
        imgUrl:
        'https://live.staticflickr.com/65535/51928914611_7ab377696e_4k.jpg'
    },
    {
        imgUrl:
        'https://live.staticflickr.com/65535/51928914611_7ab377696e_4k.jpg'
    }
]

function carouselCardItem({item, index}: Props){
    return(
        <view style={styles.cardCarousel} key={index} >
            <image style={styles.image} source={{ uri: Item.imgUrl}} ></image>

        </view>
    )
}

export function Dois(){
    return(
        <View style={style.container} >
        <Carousel
        data={carouselItems}
        renderItem={carouselCardItem}
        sliderWidth={SLIDE_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        />
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30
    },
    cardCarousel:{
        width: ITEM_WIDTH,
    },
    image:{
        height:250,
        borderRadius: 8
    }
})