import React ,{ useState} from 'react';
import {  View, Text,TouchableOpacity,TextInput,Platform, StyleSheet,StatusBar,Alert,ScrollView,LogBox} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Eyeon from "react-native-vector-icons/Feather"
import Eyeof from "react-native-vector-icons/Feather"
import {useTheme} from "react-native-paper"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import DropDownPicker from 'react-native-dropdown-picker';


  const BusinessRegistration = ({navigation}) => {
    const [data, setData] = useState({
       
        check_textInputChange: false,
        secureTextEntry: true,
        secureTextEntry2:true,
        isValidUser: true,
        isValidPassword: true,
    });
    const[businessName,setbusinessName]= useState()
    const[businessArea,setbusinessArea]= useState()
    const[businessLocation,setbusinessLocation]= useState()
    const[businessFranch,setbusinessFranch]= useState()
    const[ManagerName,setManagerName]= useState()
    const[jobRole,setjobRole]= useState()
    const[mPhone,setmPhone]= useState()
    const[Telephone,setTelephone]= useState()
    const[Email,setEmail]= useState('')
    const[password,setpassword]= useState('')
    const[BusnissType,setBusnissType]= useState()
    const[CPassword, setCpassword]=useState()

    const[businessnamevalid, setBusinessnamevalid]=useState(true)
    const[ManagerNamevalid, setManagerNamevalid]=useState(true)
    const[jobRolevalid, setjobRolevalid]=useState(true)
    const[mPhonevalid, setmPhonevalid]=useState(true)
    const[Telephonevalid, setTelephonevalid]=useState(true)
    const[Emailvalid, setEmailvalid]=useState(true)
    const[passwordvalid, setPasswordvalid]=useState(true)



    LogBox.ignoreLogs([
        'VirtualizedLists should never be nested', // TODO: Remove when fixed
    ])
    

    const ValidationFunc =(type)=>{
        let namereg=/^[A-Za-z]+$/
        let emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let numberreg=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        let passwordreg=/(?=.{8,})/

        if(type==='businessNameField')
        {
            if(namereg.test(businessName))
            {
                setBusinessnamevalid(true)
                console.log("valid name ")
            }
            else{
                setBusinessnamevalid(false)
                console.log("Invalid b Name.")

            }
        }
        else if(type==='jobRolefield')
        {
            if(namereg.test(jobRole))
             {
                 setjobRolevalid(true)
                 console.log("Valid Job Role")

             }
             else{
                 setjobRolevalid(false)
                 console.log("Not Valid Job Role")
             }
        }
        else if(type==='managerNamefield')
        {
            if(namereg.test(ManagerName))
             {
                setManagerNamevalid(true)
                
             }
             else{
                setManagerNamevalid(false)
                      }
        }
        else if(type==='emailfield'){
            if(emailreg.test(Email))
            {
                setEmailvalid(true)  
            }
            else{
                setEmailvalid(false)

            }
        }
        else if(type==='numberField')
        {
            if(numberreg.test(mPhone))
            {
                setmPhonevalid(true)

            }
            else{
                setmPhonevalid(false)
            }
        }
      

        else if(type==='passwordField')
        {
            if(passwordreg.test(password))
            {
                setPasswordvalid(true)

            }
            else{
                setPasswordvalid(false)
            }
        }
    }
  
    
   const submitData=() =>{
    if(Email == '' || password == '' )
    {  
      Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [
      {text: 'Okay'}
  ]);
}
else if(CPassword!==password)
{           setData({isValidUser:false}); 
    Alert.alert('Warning!!',"Password and Confirm Password Do not match!!",[{text:'OKAY'}]);
    }
else
{
     fetch("https://thejoblocator.co.uk/api/RestRegister",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            b_name:businessName,
            b_area:businessArea,
            b_location:businessLocation,
            b_faranchise:businessFranch,
            m_name:ManagerName,
            job_role:jobRole,
            m_phone:mPhone,
            t_phone:Telephone,
            b_type: BusnissType.BusnissType,
            type: 'bussines',
            email:Email,
            password:password
        })
    })
    .then((response) => response.json())
   // .then((response) => {console.log(response)})
     .then(result=>{
         console.log(result.verify)
         if (result.verify !== undefined) {
            Alert.alert("Registration Successful !!!")
            navigation.navigate("LoginScreen")
         }
        else{
            Alert.alert("Email Alreay Exists")
        }
    }).catch(e=>{
        console.log("busines registration Error is ", e)
        Alert.alert("Error In API")
    })
}
}

    const { colors } = useTheme();

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const updateSecureTextEntry2 = () => {
        setData({
            ...data,
            secureTextEntry2: !data.secureTextEntry2
        });
    }

    return (
      <ScrollView horizontal={false} keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#000000" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.text_header}>Business information</Text>
          </View>

          <Animatable.View animation="fadeInUpBig" style={[styles.footer, {}]}>
            <View style={[styles.form_Div, {backgroundColor: '#000'}]}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Business Name:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <TextInput
                  placeholder="Business Name"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    !businessnamevalid ? styles.error_Style : null,
                  ]}
                  autoCapitalize="none"
                  value={businessName}
                  onChangeText={text => setbusinessName(text)}
                  onEndEditing={() => ValidationFunc('businessNameField')}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {!businessnamevalid ? (
                <Animatable.Text
                  duration={1500}
                  animation="bounceInLeft"
                  style={{color: 'red', paddingLeft: 20}}>
                  Please Enter Valid Business Name
                </Animatable.Text>
              ) : null}
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Business Email:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <TextInput
                  placeholder="test@test.com"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    !Emailvalid ? styles.error_Style : null,
                  ]}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="Email"
                  value={Email}
                  onChangeText={text => setEmail(text)}
                  onEndEditing={() => ValidationFunc('emailfield')}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {!Emailvalid ? (
                <Animatable.Text
                  duration={1500}
                  animation="bounceInLeft"
                  style={{color: 'red', paddingLeft: 20}}>
                  Please Enter Valid Email
                </Animatable.Text>
              ) : null}
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Password:
              </Text>
              <View style={[styles.action]}>
                <TextInput
                  placeholder="Your Password"
                  placeholderTextColor="#666666"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  style={[
                    styles.textInput,
                    !passwordvalid ? styles.error_Style : null,
                    {},
                  ]}
                  autoCapitalize="none"
                  value={password}
                  onEndEditing={() => ValidationFunc('passwordField')}
                  onChangeText={text =>
                    handlePasswordChange(text) ? true : setpassword(text)
                  }
                />
                <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                  {data.secureTextEntry ? (
                    <Eyeon
                      name="eye"
                      color="#fff"
                      size={20}
                      style={{left: 10}}
                    />
                  ) : (
                    <Eyeof
                      name="eye-off"
                      color="#fff"
                      size={20}
                      style={{left: 10}}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {!passwordvalid ? (
                <Animatable.Text
                  duration={1500}
                  animation="bounceInLeft"
                  style={{color: 'red', paddingLeft: 20}}>
                  Password Length must be 8 characters
                </Animatable.Text>
              ) : null}
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Confirm Password:
              </Text>
              <View style={[styles.action]}>
                <TextInput
                  placeholder="Confirm Your Password"
                  value={CPassword}
                  onChangeText={text => setCpassword(text)}
                  placeholderTextColor="#666666"
                  secureTextEntry={data.secureTextEntry2 ? true : false}
                  style={[
                    styles.textInput,
                    !passwordvalid ? styles.error_Style : null,
                    {},
                  ]}
                />
                <TouchableOpacity onPress={() => updateSecureTextEntry2()}>
                  {data.secureTextEntry2 ? (
                    <Eyeon
                      name="eye"
                      color="#fff"
                      size={20}
                      style={{left: 10}}
                    />
                  ) : (
                    <Eyeof
                      name="eye-off"
                      color="#fff"
                      size={20}
                      style={{left: 10}}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Business Area:
              </Text>
              <View style={styles.action}>
                <GooglePlacesAutocomplete
                
                  placeholder="Business Area"
                  style={[styles.textInput,{color: colors.text},]}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setbusinessArea(data.description);
                  }}
                  query={{
                    key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
                    language: 'en',
                  }}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
            </View>

            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Business Franchise:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <TextInput
                  placeholder="Business Franchise"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  value={businessFranch}
                  onChangeText={text => setbusinessFranch(text)}
                  onEndEditing={() => ValidationFunc('businessNameField')}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Business Location:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <GooglePlacesAutocomplete
                  placeholder="Business Location"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setbusinessLocation(data.description);
                  }}
                  query={{
                    key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
                    language: 'en',
                  }}
                />

                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Telephone Number:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <TextInput
                  placeholder="Telephone Number"
                  keyboardType="number-pad"
                  placeholderTextColor="#666666"
                  style={[styles.textInput]}
                  autoCapitalize="none"
                  onChangeText={text => setTelephone(text)}
                  value={Telephone}
                />

                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {!Telephonevalid ? (
                <Animatable.Text
                  duration={1500}
                  animation="bounceInLeft"
                  style={{color: 'red', paddingLeft: 20}}>
                  Please Enter Valid Phone Number
                </Animatable.Text>
              ) : null}
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Manager Name:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <TextInput
                  placeholder="Manager Name"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    !ManagerNamevalid ? styles.error_Style : null,
                  ]}
                  autoCapitalize="none"
                  onChangeText={text => setManagerName(text)}
                  value={ManagerName}
                  onEndEditing={() => ValidationFunc('managerNamefield')}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {!ManagerNamevalid ? (
                <Animatable.Text
                  duration={1500}
                  animation="bounceInLeft"
                  style={{color: 'red', paddingLeft: 20}}>
                  Please Enter Manager Name
                </Animatable.Text>
              ) : null}
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Job Role:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <TextInput
                  placeholder="Job Role"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    !jobRolevalid ? styles.error_Style : null,
                  ]}
                  autoCapitalize="none"
                  onEndEditing={() => ValidationFunc('jobRolefield')}
                  onChangeText={text => setjobRole(text)}
                  value={jobRole}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {!jobRolevalid ? (
                <Animatable.Text
                  duration={1500}
                  animation="bounceInLeft"
                  style={{color: 'red', paddingLeft: 20}}>
                  Please Enter Job Name
                </Animatable.Text>
              ) : null}
            </View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Mobile Number:
              </Text>
              <View style={[styles.action, {width: 335}]}>
                <TextInput
                  placeholder="Mobile Number"
                  keyboardType="number-pad"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    !mPhonevalid ? styles.error_Style : null,
                  ]}
                  autoCapitalize="none"
                  onChangeText={text => setmPhone(text)}
                  onEndEditing={() => ValidationFunc('numberField')}
                  value={mPhone}
                />
                {data.check_textInputChange ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </View>
              {!mPhonevalid ? (
                <Animatable.Text
                  duration={1500}
                  animation="bounceInLeft"
                  style={{color: 'red', paddingLeft: 20}}>
                  please Enter Valid Mobile Number.
                </Animatable.Text>
              ) : null}
            </View>
            <View style={[styles.form_Div]}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                    height: 40,
                  },
                ]}>
                Independent or Franchise :
              </Text>
            </View>
            <View>
              <DropDownPicker
                items={[
                  {label: 'Franchise', value: 'Franchise'},
                  {label: 'Independent', value: 'Independent'},
                ]}
                placeholder="Please Select"
                containerStyle={{height: 53, borderRadius: 8}}
                style={{
                  backgroundColor: '#fff',
                  marginTop: 5,
                  width: 315,
                  marginLeft: 13,
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: '#fff'}}
                onChangeItem={item =>
                  setBusnissType({
                    BusnissType: item.value,
                  })
                }
              />
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => submitData()}>
                <LinearGradient
                  colors={['#5C636A', '#5C636A']}
                  style={styles.signIn}>
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: '#fff',
                      },
                    ]}>
                    SignUp
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
    );
};

export default BusinessRegistration;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#000000',

    },
    header: {
        justifyContent:'center',
        alignItems:'center'
    },
    footer: {
        flex: 22,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
       paddingTop:15
        
        
    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        marginLeft:15,
        marginTop:4,
        borderWidth:4,
        marginRight:9,
        height:40,
        paddingLeft:10,
        paddingTop:5,                
        borderColor:'#3F0000',
        
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        marginRight:8,
        color: '#05375a',
        marginLeft:10,
        backgroundColor:'#fff',
        borderRadius:8,
        paddingLeft:8
    },
    form_Div:{
        backgroundColor:'#000',
         borderRadius:15,
         marginTop:6
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
        fontSize: 18,
        fontWeight: 'bold'
    },
    imgstyle:{
        height:70,
        borderRadius:20,
        marginBottom:-20
    },
    error_Style:{
        borderBottomWidth:1,
        borderColor:'#B70000',
        borderRadius:18

    }
  });