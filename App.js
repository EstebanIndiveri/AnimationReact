import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import Animacion1 from './components/Animacion1';
// import Animacion2 from './components/Animacion2';
// import Animacion3 from './components/Animacion3';
// import Animacion5 from './components/Animacion5';
// import Animacion4 from './components/Animacion4';
// import Animacion6 from './components/Animacion6';
import Animacion7 from './components/Animacion7';







const App = () => {
  return (
    <Fragment>
      <View style={styles.contenido}>
        <Animacion7/>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
 contenido:{
  marginTop:100
 },
});

export default App;
