import React, { useState } from 'react';
import {StyleSheet,View,Text,TouchableWithoutFeedback,Animated} from 'react-native';



const Animacion5 = () => {
    const [animation]=useState(new Animated.Value(1));

    const presionarBtn = ()=>{
        Animated.spring(animation,{
            toValue:.8,
            useNativeDriver:false,
        }).start();
    };
    const soltarBtn = ()=>{
    }

    const estiloAnimation={
        transform:[{scale:animation}]
    };

    return ( 
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={()=>presionarBtn()}
                onPressOut={()=>soltarBtn()}
            >
                <Animated.View style={[styles.btn,estiloAnimation]}>
                <Text
                    style={styles.text}
                    >Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
     );
}
const styles=StyleSheet.create({
    contenedor:{
        alignItems:'center',
    },
    btn:{
        backgroundColor:'cornflowerblue',
        width:280,
        height:80,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#FFF',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:28,
    },
});
export default Animacion5;