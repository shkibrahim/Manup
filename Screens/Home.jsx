import React, { useState, useEffect } from 'react';
import {
  View,
  Text,ScrollView,
  StyleSheet,
  Image,SafeAreaView,
  Pressable,Keyboard,
  TextInput,Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';



const Home = ({ navigation }) => {



    const Submit = async () => {
        console.log('csvs')
      if(
          'total' === 'total'
         )
         {
        //   setIsLoading(true);
    
          // await welcome()
        //   await subscribe()
          try {
            
       
    
            await firestore()
              .collection('UserData')
              .doc('first')
            //   .collection('EventData')
            //   .doc()
              .set({
                Title: 'hello',
              
                // ... (rest of the data)
              });
    
            // setIsLoading(false);
            // alert('Product Added Successfully');
            // navigation.replace('TabNavigator');
          } catch (error) {
            // setIsLoading(false);
            console.log('Error addinfsf product:', error);
            // Handle any error that might occur during the process
          }
    
        }
      };



























  return (
    <SafeAreaView style={{ height:'100%' }}>
   
<View>
    <Text style={{color:"black"}}>
        good hofya
    </Text>

    <TouchableOpacity  style={{backgroundColor:"red"}}onPress={Submit}>
    <Text style={{color:"black"}}>
        Ye dekh
    </Text>

    </TouchableOpacity>
</View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default Home;
