import { View, Text, Animated, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { prepareNavigation, resetAndNavigate } from '../helpers/NavigationUtil';
import Wrapper from '../components/Wrapper';
import { deviceHeight, deviceWidth } from '../constants/Scaling';

const SplashScreen = () => {

  const [isStop]=useState(false);
  const scale=new Animated.Value(1);

  useEffect(()=>{
    prepareNavigation();
    setTimeout(()=>{
      resetAndNavigate('HomeScreen');
    },1500);
  },[]);

  useEffect(()=>{
    const breathingAnimation=Animated.loop(
      Animated.sequence([
        Animated.timing(scale,{
          toValue:1.1,
          duration:2000,
          useNativeDriver:true,
        }),
        Animated.timing(scale,{
          toValue:1,
          duration: 2000,

        })
      ])
    );
    if(!isStop) {
      breathingAnimation.start();
    }
    return ()=>{
      breathingAnimation.stop();
    }
  },[isStop]);

  return (
    <Wrapper>
      <Animated.View style={[styles.imgContainer, {transform: [{scale}]}]}>
        <Image source={logo} style={styles.img} />
      </Animated.View>

      <ActivityIndicator size="small" color="white" />
    </Wrapper>
  )
};

const styles=StyleSheet.create({
  imgContainer:{
    width:deviceWidth*0.7,
    height:deviceHeight*0.6,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:'100%',
    height:'100%',
    resizeMode:'contain'
  }
})

export default SplashScreen