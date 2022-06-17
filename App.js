import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, Pressable, Linking} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const linkGithub = 'https://github.com/LeticiaTrindade/'
const linkInstagram = 'https://www.instagram.com/leticiatrindadet/'
const linkLinkedin = 'https://www.linkedin.com/in/leticiatrindadet/'

const App = () => {

  const handlePressGoGithub = async ()  => {
    const res = await Linking.canOpenURL(linkGithub);
    if (res){
      Linking.openURL(linkGithub);
    }
  };

  const handlePressGoInstagram = async ()  => {
    const res = await Linking.canOpenURL(linkInstagram);
    if (res){
      Linking.openURL(linkInstagram);
    }
  };

  const handlePressGoLinkedin = async ()  => {
    const res = await Linking.canOpenURL(linkLinkedin);
    if (res){
      Linking.openURL(linkLinkedin);
    }
  };


  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {

    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
 
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

return(
  <View style={ toggle? style.containerLight : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>

      <Image
        style={
          toggle ? style.lightingOn : style.lightingOff}
        source={
          toggle 
          ? require('./assets/icons/eco-light.png/')
          : require('./assets/icons/eco-light-off.png/')} 
          
        />

        <Image 
        source={
          toggle 
            ? require('./assets/icons/logo-dio.png')
            : require('./assets/icons/logo-dio-white.png')} 
          style={style.diologo}
        />
      </TouchableOpacity>

      <Text style={toggle ? style.TextDevOn : style.TextDevOff} >Desenvolvido por Letíca Trindade</Text>

      <View style={style.horizontal}>

    
      <Pressable onPress={handlePressGoLinkedin}> 
      <Image
        style={
          toggle ? style.icons : style.iconsOff}
          source={
            toggle 
            ? require('./assets/icons/linkedin.png/')
            : require('./assets/icons/linkedin.png/')} 
          
            />
      </Pressable>

      <Pressable onPress={handlePressGoInstagram}> 
      <Image
        style={
          toggle ? style.icons : style.iconsOff}
        source={
          toggle 
          ? require('./assets/icons/instagram.png/')
          : require('./assets/icons/instagram.png/')} 
          
        />
        </Pressable>

      <Pressable onPress={handlePressGoGithub}> 
      <Image
        style={
          toggle ? style.icons : style.iconsOff}
        source={
          toggle 
          ? require('./assets/icons/github.png/')
          : require('./assets/icons/github.png/')} 
          
        />
      </Pressable>
            </View>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  diologo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },

  TextDevOn: {
    color: 'black',
    fontSize: 10,
  },

  TextDevOff: {
    color: 'white',
    fontSize: 10,
  },

  iconsOff: {
    width: 40,
    height: 40,
    tintColor: 'white',
    margin: 10,
  },

  icons: {
    width: 40,
    height: 40,
    margin: 10,
  },

  horizontal: {
    flexDirection: 'row',
    
  },

})