import React, {useState,useEffect} from 'react';
import {View, Text,TouchableOpacity,TextInput, StyleSheet,ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const EditProfileScreen = ({navigation, route}) => {

 
  const[email, setEmail]= useState(route.params.email)
  const[b_name, setBname]=useState(route.params.b_name)
  const[b_area, setBarea]=useState(route.params.b_area)
  const[b_location, setBlocation]=useState(route.params.b_location)
  const[b_faranchise, setBfranchise]=useState(route.params.b_faranchise)
  const[m_name, setMName]= useState(route.params.m_name)
  const[job_role, setJobRole]=useState(route.params.job_role)
  const[m_phone, setMobile]=useState(route.params.m_phone)
  const[t_phone, SetPhone]=useState(route.params.t_phone)
  
  const {colors} = useTheme();
  return (
  
    <View style={styles.container}>
      
      <ScrollView keyboardShouldPersistTaps='handled'>
      <Animated.View style={{marginTop: 20,backgroundColor:'#000'}}>
        <View style={{alignItems: 'center'}}>
          
          <Text style={{marginTop: 10,marginBottom:19, fontSize: 22,color:'#fff', fontWeight: 'bold'}}>
            Update Your Profile
          </Text>
        </View>
      
        <View style={[styles.form_Div]}>
        <Text style={styles.text_Style}>Business Name:</Text>
        <View style={[styles.action,]}>
          <TextInput
            placeholder="Business Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={b_name}
            onChangeText={(text)=>setBname(text)}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        </View>
        <View style={styles.form_Div}>
        <Text  style={styles.text_Style}>Business Franchise:</Text>
        <View style={styles.action}>
          
          <TextInput
            placeholder="Business Franchise"
            placeholderTextColor="#666666"
            value={b_faranchise}
            onChangeText={(text)=>setBfranchise(text)}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>       
         </View>
      <View style={styles.form_Div}>
      <Text  style={styles.text_Style}>Job Role:</Text>
        <View style={styles.action}>
          
          <TextInput
            placeholder="Job Role"
            placeholderTextColor="#666666"
            value={job_role}
            onChangeText={(text)=>setJobRole(text)}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>  
        </View>
        <View style={styles.form_Div}>
        <Text  style={styles.text_Style}>Manager Name:</Text>
        <View style={styles.action}>
         
          <TextInput
            placeholder="Manager Name"
            placeholderTextColor="#666666"
            value={m_name}
            onChangeText={(text)=>setMName(text)}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
          </View> 
          <View style={styles.form_Div}> 
          <Text  style={styles.text_Style}>Phone Number:</Text>
        <View style={styles.action}>
                   <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            value={t_phone}
            onChangeText={(text)=>SetPhone(text)}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
          </View>

          <View style={styles.form_Div}>
          <Text  style={styles.text_Style}>Mobile Number:</Text>
        <View style={styles.action}>        
          <TextInput
            placeholder="Mobile"
            value={m_phone}
            onChangeText={(text)=>setMobile(text)}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        </View>
          <View style={styles.form_Div}>
          <Text  style={styles.text_Style}>Email:</Text>
        <View style={styles.action}>
                 <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            value={email}
            onChangeText={(text)=>setEmail(text)}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
          </View>
          <View style={styles.form_Div}>
          <Text  style={styles.text_Style}>Business Area:</Text>
        <View style={styles.action}>
         
          <TextInput
            placeholder="Business Area"
            value={b_area}
            onChangeText={(text)=>setBarea(text)}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
            </View> 
            <View style={styles.form_Div}>
            <Text  style={styles.text_Style}>Business Location:</Text>
        <View style={styles.action}>
        
            <GooglePlacesAutocomplete
                placeholder="Business Location"
                style={[styles.textInput, {
                    color: colors.text
                }]}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setBlocation(data.description)
                }}
                query={{
                    key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
                    language: 'en',
                }}
            
            />
        </View>
            </View>
       
            <View style={styles.button}>
            <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => LoginFunc()}
                >
                <LinearGradient
                    colors={['#5C636A', '#5C636A']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Update</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        
      </Animated.View>
      </ScrollView>
    </View>
    
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
    backgroundColor: '#2E2C2B',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  button: {
    alignItems: 'center',
    marginTop: 50
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
textSign: {
    fontSize: 22,
    fontWeight: 'bold'
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
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2E2C2B',
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
    backgroundColor:'#fff',
    borderRadius:4,
    marginLeft:15,
    paddingLeft:17,
    paddingTop:3
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
   
  },
  form_Div:{
    backgroundColor:'#000',
     borderRadius:15,
     marginTop:5
},
text_Style:
{marginLeft:15,color:'#fff',borderColor:'#fff',height:35, borderColor:'#3F0000', borderWidth:3, fontSize:14,marginTop:10, paddingTop:6,paddingLeft:28, fontWeight:'bold'}

});
