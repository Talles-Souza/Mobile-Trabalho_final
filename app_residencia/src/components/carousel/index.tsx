import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    StatusBar,
    Text,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Item = ({ item }: { item: { image: string } }) => {
    return (
        <View style={styles.slide}>
            <Image source={{ uri: item.image }} style={{ width: 300, height: 400 }} />
        </View>
    );
};

const CarouselHome = () => {
    const carousel = [
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/91SDZ2eUj+L.jpg',
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/61kif0Iav7L.jpg',
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/51YO61qiBKL._SX327_BO1,204,203,200_.jpg',
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/71SYepTUsDL.jpg',
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/71oRXwKU6TL.jpg',
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/91M9xPIf10L.jpg',
        },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'rgba(0, 0, 0, 0.3)'}
                    barStyle={'light-content'}
                />
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
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
    },
    slide: {
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 400,
    },
    title: {
        fontSize: 60,
        paddingVertical: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    scrollview: {
        flex: 1,
    },
});

export default CarouselHome;