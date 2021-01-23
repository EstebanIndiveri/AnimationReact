import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,Animated} from 'react-native';

const Animacion2 = () => {
    const [animation] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.timing(
            animation,{
                toValue:450,
                duration: 1000,
                useNativeDriver:false,
            }
        ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <Animated.View
        style={[
            styles.caja,
            {
                width:animation,
                height:animation,
            },
        ]}
        >
            <Text>algo</Text>
        </Animated.View>
     );
}
const styles=StyleSheet.create({
    caja:{
        width:100,
        height:100,
        backgroundColor:'cornflowerblue',
    }
})
export default Animacion2;