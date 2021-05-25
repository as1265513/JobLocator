import React, {  useEffect, useState }  from "react"
import {View,Text,TouchableOpacity,TextInput,StyleSheet, ScrollView,Alert, Platform} from 'react-native';
import {Title} from "react-native-paper"
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from "react-native-animatable"
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, { lessThan } from 'react-native-reanimated';
import DocumentPicker from 'react-native-document-picker';
import Feather from "react-native-vector-icons/Feather"



const EditProfileScreen = ({navigation,route}) => {
 
  const[description, setDescription]= useState()
  const[resume, setResume]= useState()
  const[id, Setid]= useState(route.params.id)
  const[userid, SetuserId]= useState(route.params.user_id)


                // function to pick File from Gallery..
          const PickCV= async()=>{ 
          try {
               const res = await DocumentPicker.pick({
               type: [DocumentPicker.types.allFiles]
              // type:`DOC/pdf`
            });
            console.log(res)
             setResume(res)
                  
              Alert.alert('Congratulations!!',"Your CV has been Successfuly Uploaded",[{
             text:'Okay'
           }])
            setTimeout(() => {
              this.bs.current.snapTo(1);
            }, 2000);      
          } catch (err) {
            if (DocumentPicker.isCancel(err)) { 
            } else {
              throw err;
            }
          }
        }
       

       const ApplyforJOb = async () => {
        // Check if any file is selected or not
        if (resume != null) {
          // If file selected then create FormData
          const fileToUpload = resume;
          const data = new FormData();
          data.append('resume', fileToUpload);
          data.append('job_id', id );
          data.append('description', description );
          data.append('user_id', userid );
          // Please change file upload URL
          let res = await fetch(
            'https://thejoblocator.co.uk/api/RestApplyJob',
            {
              method: 'post',
              body: data,
              headers: {
                'Content-Type': 'multipart/form-data; ',
              },
            }
          );
          let responseJson = await res.json();
          if(responseJson.code == 200 ){
            Alert.alert("File Uploaded Successfully");
          }else{
            Alert.alert("Error")
          }
        }
      };
               
                  

   renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Your Resume</Text>
        <Text style={styles.panelSubtitle}>Please Select Your Resume</Text>
      </View>
      <TextInput
     
      value={description}
      onChangeText={(text)=>setDescription(text)}
      style={{backgroundColor:'white',borderColor:'#2C3749', borderWidth:1, borderRadius:7,}}
      placeholder="Description"
      numberOfLines={3}
      />
     
      <TouchableOpacity style={styles.panelButton} onPress={PickCV}>
        <Text style={styles.panelButtonTitle}>Choose From Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <ScrollView>

   
    <View style={{backgroundColor:"#000", flex:1}} >
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
    }}>

        <ScrollView>  
            <Text style={styles.text_style}>JOB DETAIL</Text>
            <Animatable.View duration={1000} easing='ease-out-back' animation="fadeInUpBig" style={{ backgroundColor:'#000',  borderRadius:10}}>
                <View style={{marginTop:10,marginLeft:20}}>
                <Title style={styles.text_Det}>Job title:  {route.params.title}</Title>
                <Text style={styles.Data_style}> </Text>
                </View>
                <View style={{marginLeft:20, marginTop:-30}}>
                <Title style={styles.text_Det}>Job Description</Title>
                <Text style={styles.Data_style}> {route.params.description}</Text>
                </View>
                <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Skills Required</Title>
                <Text style={styles.Data_style}>{route.params.skills}</Text> 
                </View>
                <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Location</Title>
                <Text style={styles.Data_style}>{route.params.location}</Text>
                </View>
                <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Required Career Level?</Title>
                <Text style={styles.Data_style}>{route.params.career_level}</Text>
                </View> 
                <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Number of Canidates required ?</Title>
                <Text style={styles.Data_style}> {route.params.num_pos}</Text>
                </View>
                <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Year Of Experience Required</Title>
                <Text style={styles.Data_style}>{route.params.exp_min} <Feather name="minus" size={16}/>  {route.params.exp_max} Year(S)</Text>
                </View>
                <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Qualification Required</Title>
                <Text style={styles.Data_style}>{route.params.d_criteria}</Text>
                </View>
                <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Salary</Title>
                <Text style={styles.Data_style}>{route.params.salary_min}  <Feather name="minus" size={16}/>{route.params.salary_max}</Text>
                </View>
               <View style={styles.apply_style}>
                <Title style={styles.text_Det}>Gender Preferance:  {route.params.gender}</Title>
      
                </View>
           
            <View style={[styles.button,{marginTop:30}]}>
             <TouchableOpacity
                     style={styles.signIn}
                     onPress={() => this.bs.current.snapTo(0)} 
                 >
                 <LinearGradient
                     colors={['#5C636A', '#5C636A']}
                     style={styles.signIn}
                 >
                     <Text style={[styles.textSign, {
                         color:'#fff'
                     }]}>Upload</Text>
                 </LinearGradient>
                 </TouchableOpacity>
             </View>
             <View style={styles.button}>
             <TouchableOpacity
                     style={styles.signIn}
                     onPress={() => ApplyforJOb()}
                     >
                  <LinearGradient
                     colors={['#5C636A', '#5C636A']}
                     style={styles.signIn}
                   
                 >
                     <Text style={[styles.textSign, {
                         color:'#fff'
                     }]}>Apply</Text>
                 </LinearGradient>
                 </TouchableOpacity>
             </View>
           
            </Animatable.View>
        
        </ScrollView>       
      </Animated.View>
     <Text style={{fontSize:33, color:'#fff'}}>Haljldjld</Text>
    </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
      signIn: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginLeft:30,
        marginBottom:5,
    },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor:'#2C3749',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
      textSign: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    text_style:{
                color:'white',
                fontSize:30,
                textAlign:'center',
                marginBottom:10,
                marginTop:30
            },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  form_Div:{
    backgroundColor:'#fff',
     borderRadius:15,
     marginTop:5
},
Data_style:
{
  color:'#fff',
  marginLeft:30,
  height:40,
  marginLeft:15,
  marginTop:6
},
text_Det:
{
color:'#fff',
borderWidth:3,
paddingLeft:15,
borderColor:'#3F0000',
height:50,
paddingTop:5,
},
apply_style:{
  marginLeft:20,
  marginTop:10
}
});