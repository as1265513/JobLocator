import React, { useState } from "react"
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';
import {Button} from "react-native-paper"

//const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
 
 //const source =require('../android/app/src/main/assets/pdf/mypdf.pdf')
  
const DropDown =()=>{
 // const[source, setSource]= useState(require('../android/app/src/main/assets/pdf/mypdf.pdf'))
  const PickCV= async()=>{ 
    try {
      
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res)
       setSource(res.uri)
       console.log( res.uri)
           
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
     
      } else {
        throw err;
      }
    }
  }
  return(
    <View style={styles.container}>
    <Pdf
        source={source}
        onLoadComplete={(numberOfPages,filePath)=>{
            console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages)=>{
            console.log(`current page: ${page}`);
        }}
        onError={(error)=>{
            console.log(error);
        }}
        onPressLink={(uri)=>{
            console.log(`Link presse: ${uri}`)
        }}
        style={styles.pdf}/>
        <Button onPress={()=>PickCV()}>Upload</Button>
</View>

)
      }      
      const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
export default DropDown