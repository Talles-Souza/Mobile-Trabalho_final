import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, StatusBar, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Item = ({item}: {item: {image: string}}) => {
    return (
        <View style={styles.slide}>
            <Image source={{uri: item.image}} style={{width: 300, height: 300}} />
        </View>
    );
};

export const Teste = () =>{
    const carousel = [
        {
            image: 'https://live.staticflickr.com/65535/51928914611_7ab377696e_4k.jpg'
        },
        {
            image: 'https://live.staticflickr.com/65535/51928914611_7ab377696e_4k.jpg'
        },
        {
            image: 'https://live.staticflickr.com/65535/51928914611_7ab377696e_4k.jpg'
        },
    ];

    return(
        <SafeAreaView style={styles.safeArea}>
            <View>
                <StatusBar
                translucent={true}
                backgroundColor={'#333'}
                barStyle={'light-content'}
                />
                <Text style={styles.title}>Carrossel</Text>
                <Carousel
                data={carousel}
                renderItem={Item}
                sliderWidth={300}
                itemWidth={300}
                inactiveSlideScale={0.95}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                activeSlideAlignment={'start'}
                activeAnimationType={'spring'}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:'#3333',
    },
    container:{
        flex:1,
        backgroundColor: '#8721FF',
        justifyContent:'center',
        alignItems:'center',
    },
    gradient:{
        ...StyleSheet.absoluteFillObject,
    },
    slide:{
        backgroundColor: 'floralwhite',
        borderRadius:5,
        height:250,
    },
    title:{
        fontSize: 60,
        paddingVertical:20,
        fontWeight:'bold',
        color:'#FFFFFF',
    },
});

