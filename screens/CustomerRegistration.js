import React ,{useState} from 'react';
import {  View, Text,TouchableOpacity,TextInput,Platform, StyleSheet,StatusBar,Alert,ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Eyeon from "react-native-vector-icons/Feather"
import Eyeof from "react-native-vector-icons/Feather"
import {useTheme} from "react-native-paper"
import DateTimePickerModal from  "react-native-modal-datetime-picker"
import Calender from "react-native-vector-icons/Feather"


const CustomerRegistration = ({navigation}) => {

    const [data, setData] = useState({
       
        check_textInputChange: false,
        secureTextEntry: true,
        secureTextEntry2:true,
        isValidUser: true,
        isValidPassword: true,
    });
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const[FirstName,setFirstName]= useState()
    const[LastName,setLastName]= useState()
    const[birthday,setBirthday]= useState('')
    const[age,setAge]= useState()
    const[postcode,setPostcode]= useState()
    const[Empstatus,setEmpstatus]= useState()
    const[Email,setEmail]= useState('')
    const[password,setpassword]= useState('')
    const[CPassword, setCpassword]= useState()

    const[FirstNamevalid, setFirstNamevalid]=useState(true)
    const[LastNamevalid, setLastNamevalid] =useState(true)
    const[birthdayValid, setBirthdayValid]=useState(true)
    const[agevalid, setAgevalid]= useState(true)
    const[postcodevalid, setpostcodevalid]= useState(true)
    const[EmpValid, setEmpvalid]=useState(true)
    const[EmailValid, setEmailvalid]=useState(true)
    const[passwordValid, setPasswordvalid]=useState(true)

    
    const ValidationFunc =(type)=>{
        let namereg=/^[A-Za-z]+$/
        let emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let numberreg=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        let passwordreg=/(?=.{8,})/
        let Postcode=/^[0-9]{5}$/

        if(type==='firstName')
        {
            if(namereg.test(FirstName))
        {
            setFirstNamevalid(true)

        }
        else
        {
            setFirstNamevalid(false)

        }

        }
        else if(type==='LastName')
        {
            if(namereg.test(LastName))
            {
                    setLastNamevalid(true)
            }
            else{
                setLastNamevalid(false)

            }
        }
        else if(type==='email')
        {
            if(emailreg.test(Email))
            {
                    setEmailvalid(true)
            }
            else{
                setEmailvalid(false)

            }
        }
        else if(type==='password')
        {
            if(passwordreg.test(password))
            {
                    setPasswordvalid(true)
            }
            else{
                setPasswordvalid(false)

            }
        }
        else if(type==='birthday')
        {
            if(namereg.test(birthday))
            {
                    setBirthdayValid(true)
            }
            else{
                setBirthdayValid(false)

            }
        }
        else if(type==='age')
        {
            if(namereg.test(age))
            {
                    setAgevalid(true)
            }
            else{
                setAgevalid(false)

            }
        }
        else if(type==='postCode')
        {
            if(Postcode.test(postcode))
            {
                    setpostcodevalid(true)
            }
            else{
                setpostcodevalid(false)

            }
        }
        else if(type==='EmpField')
        {
            if(namereg.test(Empstatus))
            {
                    setEmpvalid(true)
            }
            else{
                setEmpvalid(false)

            }
        }
        
        
    }
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
     
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

     
      const handleConfirm = (date) => {
        let day   = date.getDate();
        let month = date.getMonth();
        let year  = date.getFullYear();
        month=month+1;
       // console.log('A date has been picked: ' + day + '-' + month + '-' + year);
       let exdate= day + '-' + month + '-' + year
        setBirthday( exdate) 
        // console.log(birthday)
        hideDatePicker();
      };

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
      return  setData({isValidUser:true});
      }
else
{
    fetch("https://thejoblocator.co.uk/api/RestRegister",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            f_name:FirstName,
            l_name:LastName,
            birthday:birthday,
            age:age,
            postcode:postcode,
            e_status:Empstatus,
            type: 'customer',
            email:Email,
            password:password
        })
    })
    .then((response) => response.json())
    // .then((response) => {console.log(response)})
    .then(result=>{
        console.log(result)
        Alert.alert(" Registration Successful !!!")
         navigation.navigate("LoginScreen")
         
    }).catch(e=>{
        console.log("Your Error is ", e)
        Alert.alert("Error In API")
    })
}   
}

    const { colors } = useTheme();

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
      <ScrollView>
      <View style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Customer information</Text>
        </View>
       
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: "#000"
            }]}
        >
            <View style={styles.form_Div}>
            <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>First Name:</Text>
            <View style={[styles.action,{width:330}]}>
                
                <TextInput 
                    placeholder="First Name"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, 
                    !FirstNamevalid ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    value={FirstName}
                    onEndEditing={()=>ValidationFunc('firstName')}
                    onChangeText={(text)=>setFirstName(text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            {!FirstNamevalid ?<Animatable.Text duration={1500} animation="bounceInLeft" style={{color:'red',paddingLeft:20}}>Please Enter First Name</Animatable.Text> :null}
            </View>
            <View style={styles.form_Div}>
            <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>Last Name:</Text>
            <View style={[styles.action,{width:330}]}>

                <TextInput 
                    placeholder="LastName"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, 
                    !LastNamevalid  ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    
                    name="LastName"
                    value={LastName}
                    onChangeText={(text)=> setLastName(text)}
                    onEndEditing={()=>ValidationFunc('LastName')}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            {!LastNamevalid ?<Animatable.Text duration={1500} animation="bounceInLeft" style={{color:'red',paddingLeft:20}}>Please Enter Last Name.</Animatable.Text> :null}
             </View>
 
           <View style={styles.form_Div}>
           <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>Email:</Text>
            <View style={[styles.action,{width:330}]}>
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, 
                    !EmailValid  ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    
                    name="Email"
                    value={Email}
                    onChangeText={(text)=> setEmail(text)}
                    onEndEditing={()=>ValidationFunc('email')}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            {!EmailValid ?<Animatable.Text duration={1500} animation="bounceInLeft" style={{color:'red',paddingLeft:20}}>Please Enter Valid Email</Animatable.Text> :null}
                </View>  
                <View style={styles.form_Div}>
                <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>Password:</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, 
                    !passwordValid  ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    onEndEditing={()=>ValidationFunc('password')}
                    value={password}
                    onChangeText={(text)=> setpassword(text)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Eyeon 
                        name="eye"
                        color="grey"
                        size={20}
                        
                    />
                    :
                    <Eyeof
                        name="eye-off"
                        color="grey"
                        size={20}
                       
                    />
                    }
                </TouchableOpacity>
            </View>
            {!passwordValid ?<Animatable.Text duration={1500} animation="bounceInLeft" style={{color:'red',paddingLeft:20}}>Password Length must be 8 characters</Animatable.Text> :null}        
                 </View>        
                <View style={styles.form_Div}>
                <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>Confirm Password:</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry2 ? true : false}
                    style={[styles.textInput, 
                    !passwordValid  ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    value={CPassword}
                    onChangeText={(text)=> setCpassword(text)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry2}
                >
                    {data.secureTextEntry2 ? 
                    <Eyeon 
                        name="eye"
                        color="grey"
                        size={20}
                        
                    />
                    :
                    <Eyeof
                        name="eye-off"
                        color="grey"
                        size={20}
                       
                    />
                    }
                </TouchableOpacity>
            </View>
       
                 </View>        
            <View style={styles.form_Div}>
            <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>Date of Birth:</Text>
            <View style={[styles.action]}>                   
                <TextInput 
                    placeholder="dd/mm/yyyy"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, 
                    !birthdayValid ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    onEndEditing={()=>ValidationFunc('birthdayField')}
                    name="birthday"
                    value={birthday}
                    onChangeText={(text)=> setBirthday(text)}
                />
                  <TouchableOpacity onPress={()=>showDatePicker()} >
                    <Calender 
                        name="calendar"
                        color="#fff"
                        size={20}
                        style={{marginRight:13, }}
                    />
                </TouchableOpacity>
                <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
            </View>
            {!birthdayValid ?<Animatable.Text duration={1500} animation="bounceInLeft" style={{color:'red',paddingLeft:20}}>Password Length must be 8 characters</Animatable.Text> :null}
                </View>   
                <View style={styles.form_Div}>
                <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>Age:</Text>
             <View style={[styles.action,{width:330}]}>
                <TextInput 
                    placeholder="Age"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    keyboardType="number-pad"
                    name="age"
                    value={age}
                    onEndEditing={()=>ValidationFunc('age')}
                    onChangeText={(text)=> setAge(text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>                 
             </View>         
            <View style={styles.form_Div}>
            <Text style={[styles.text_footer, {
                color: "#fff"
            }]}>Enter Post Code:</Text>
             <View style={[styles.action,{width:330}]}>
    
                <TextInput 
                    placeholder="Enter Post Code"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, 
                    !postcodevalid ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    onChangeText={(text)=>setPostcode(text)}
                    value={postcode}
                    onEndEditing={()=>ValidationFunc('postCode')}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            {!postcodevalid ?<Animatable.Text duration={1500} animation="bounceInLeft" style={{color:'red',paddingLeft:20}}>Postal Code should be 5 digits</Animatable.Text> :null}
             </View>
            <View style={styles.form_Div}>
            <Text style={[styles.text_footer, {
               color: "#fff"
            }]}>Employment Status:</Text>
             <View style={[styles.action,{width:330}]}>    
                <TextInput 
                    placeholder="Employment Status"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, 
                    !EmpValid ? styles.error_Style:null
                    ]}
                    autoCapitalize="none"
                    onChangeText={(text)=>setEmpstatus(text)}
                    value={Empstatus}
                    onEndEditing={()=>ValidationFunc('EmpField')}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            {!EmpValid ?<Animatable.Text duration={1500} animation="bounceInLeft" style={{color:'red',paddingLeft:20}}>Please Enter Employee Status</Animatable.Text> :null}
 
         
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => submitData()}
                >
                <LinearGradient
                    colors={['#5C636A', '#5C636A']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]} >SignUp</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
      </ScrollView>
    );
};

export default CustomerRegistration;
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