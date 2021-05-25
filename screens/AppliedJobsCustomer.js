import React from "react"
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import { Appbar } from 'react-native-paper';

const AppliedJobsCustomer = () => {

      
  return (
   <>
    <Appbar.Header style={{backgroundColor:'#000'}}>
      <Appbar.BackAction />
      <Appbar.Content title="JOB APPLIED"  />
      
    </Appbar.Header>
    <ScrollView style={{flex:1, backgroundColor:'#000'}}>  
    <View >
    <View style={{width:'100%',borderWidth:3, borderColor:'#3F0000'}}></View>
    </View>

</ScrollView>       

   </>

       
  );
};

export default AppliedJobsCustomer;
