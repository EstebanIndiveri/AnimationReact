import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,Animated,View} from 'react-native';

const Animacion4 = () => {
    const [animation] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.timing(
            animation,{
                toValue:360,
                duration: 500,
                useNativeDriver:false,
            }
        ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const interpolated=animation.interpolate({
        inputRange:[0,360],
        outputRange:['0deg','360deg'],
    });
    const estiloAnimation={
        transform:[{rotate:interpolated}]
    };

    return (
        <View>
            <Animated.View
            style={[styles.caja,estiloAnimation]}
            ></Animated.View>
        </View>
     );
}
const styles=StyleSheet.create({
    caja:{
        width:100,
        height:100,
        backgroundColor :'cornflowerblue',
    }
})
export default Animacion4;