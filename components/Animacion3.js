import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,Animated,View} from 'react-native';

const Animacion3 = () => {
    const [animation] = useState(new Animated.Value(14));

    useEffect(()=>{
        Animated.timing(
            animation,{
                toValue:40,
                duration: 500,
                useNativeDriver:false,
            }
        ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <View>
            <Animated.Text
            style={[styles.texto,{fontSize:animation}]}
            >algo</Animated.Text>
        </View>
     );
}
const styles=StyleSheet.create({
    texto:{
        fontSize:30,
        textAlign:'center',
    }
})
export default Animacion3;