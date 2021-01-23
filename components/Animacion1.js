import React,{useState,useEffect} from 'react';
import {StyleSheet,Text,Animated} from 'react-native';

const Animacion1 = () => {
    const [animation] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.timing(
            animation,{
                toValue:1,
                duration: 500,
                useNativeDriver:true,
            }
        ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <Animated.View
        style={{
            opacity:animation,
        }}
        >
            <Text style={styles.texto}>Animaciones1</Text>
        </Animated.View>
     );
}
const styles=StyleSheet.create({
    texto:{
        fontSize:30,
        textAlign: 'center',

    }
})
export default Animacion1;