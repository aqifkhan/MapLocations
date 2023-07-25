import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {

    const animation = useRef(null);
    const animationPath = '../assets/animatins/animation_ljzjryqf.json'

    setTimeout(() => {
        navigation.replace('Map')
    }, 3000)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    flex:1
                }}
                source={require(animationPath)}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})
