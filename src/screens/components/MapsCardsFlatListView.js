import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons';

const MapsCardsFlatListView = ({ item }) => {

    const { addressStyle, cardDataView, cardDetials, cardImageView, cartView, nameStyle, openClose, timings, ratingTxt } = styles
    return (
        <TouchableOpacity
            style={cartView}
            activeOpacity={0.7}
        >
            <View style={cardDataView}>
                <View style={{}}>
                    <Image
                        source={{ uri: item.featured_image }}
                        style={cardImageView}
                    />
                </View>
                <View style={cardDetials}>
                    <Text style={nameStyle}>
                        {item.name.slice(0, 35)}...
                    </Text>
                    <Text style={addressStyle}>
                        {item.address}
                    </Text>

                    <Text style={timings}>
                        {item.timings}
                    </Text>
                </View>
            </View>
            <View style={openClose}>
                <AntDesign name="star" size={15} color="#FFD700" />
                <Text style={ratingTxt}>{item.average_rating}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MapsCardsFlatListView

const styles = StyleSheet.create({
    cartView: {
        backgroundColor: '#FFFFFF',
        width: RFPercentage(48),
        marginHorizontal: RFPercentage(1.5),
        borderRadius: 10,
        justifyContent: 'center'
    },
    cardDataView: {
        flexDirection: 'row',
        // marginHorizontal: 5
    },
    cardImageView: {
        width: RFPercentage(14),
        height: RFPercentage(17),
        // borderRadius: 10
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    cardDetials: {
        width: '68%', marginLeft: 10, justifyContent: 'space-around'
    },
    nameStyle: {
        fontSize: 15, fontWeight: 'bold'
    },
    addressStyle: {
        marginVertical: 3, fontWeight: 'bold'
    },
    timings: {
        fontSize: 12, fontWeight: 'bold'
    },
    openClose: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        // backgroundColor: 'black',
        paddingRight: 15,
        paddingBottom: 5,
        paddingLeft: 10,
        // borderTopLeftRadius: 10,
        // borderBottomRightRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingTxt: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 18, marginLeft: 5
    }

})