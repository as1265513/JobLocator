import React ,{useState} from 'react';
import { FlatList,View, Text,TouchableOpacity,TextInput,Platform, StyleSheet,StatusBar,ScrollView, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme , RadioButton} from "react-native-paper"
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

Geocoder.init("AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg");


 const PostJob = ({navigation}) => {

    const [data, setData] = useState({
       
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const[title,setTitle]= useState()
    const[description,setDescription]= useState()
    const[skills,setSkills]= useState()
    const[city,setCity]= useState()
    const[careerLevel,setCareerLevel]= useState()
    const[numofPos,setNumofPos]= useState()
    const[exp_min,setExp_min]= useState()
    const[exp_max,setExp_max]= useState()
    const[degree,setDegree]= useState()
    const[criteria,setCriteria]= useState()
    const[salary_from,setSalary_from]= useState()
    const[salary_to, setSalary_to]= useState()
    const[gender, setGender]= useState()
    const[userId, setUserId]= useState()
    const [JobTime, setJobTIme] = useState()
    let mylang
    let mylat

    const GetLatLng =async()=>{
        await Geocoder.from(city, {
           southwest: {lat: 36.05, long: -115.25},
           northeast: {lat: 36.16, long: -115.10}})
           .then(json => {
             var location = json.results[0].geometry.location
             mylang=location.lng
             mylat=location.lat
              PostJobFunc()
           })
           .catch(error => console.log(error));
       
       // Search by geo-location (reverse geo-code)
       Geocoder.from(33.6844,73.0479)
           .then(json => {
            var addressComponent = json.results[0].address_components[0];
             console.log(addressComponent);
           })
           .catch(error => console.warn(error));
           Alert.alert(
            "my city  ",
            "Please Enter your City!",
            [{
              text:"Enter City",
              
              style:'default'
            }]
          )
           
       }
    
   const PostJobFunc=() =>{

     fetch('https://thejoblocator.co.uk/api/RestCreateJob',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:title,
            description:description,
            skills:skills,
            location:city,
            user_id:12,
            career_level:careerLevel,
            num_pos:numofPos,
            exp_min:exp_min,
            exp_max:exp_max,
            degree:degree,
            criteria:criteria,
            salary_from:salary_from,
            salary_to:salary_to,
            gender:gender,
            longitude:mylang,
            latitude:mylat,
            job_type:JobTime
            // adding Job Time
        })
        
    }).then(response=>response.json())
    .then(result=>{
      Alert.alert(
        "Posting Job",
        result,
        [{
          text:"Ok",
          onPress:()=>navigation.navigate("MainTabBusiness"),
          style:'default'
        }]
      )
       
         

    }).catch(e=>{
      Alert.alert(
        "Posting Job",
        e,
        [{
          text:"Ok",
          
          style:'default'
        }]
      )
    })

   }

    const { colors } = useTheme();

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

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

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    return (
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#E2E2E2" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={[styles.text_header, {color: 'white'}]}>
              POST A JOB
            </Text>
          </View>
          <Animatable.View
            animation="fadeInUpBig"
            style={[
              styles.footer,
              {
                backgroundColor: '#000',
              },
            ]}>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Job Title:
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="job title"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  value={title}
                  onChangeText={text => setTitle(text)}
                />
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
                Description:
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="Description*"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                      marginTop: -20,
                    },
                  ]}
                  multiline={true}
                  numberOfLines={6}
                  autoCapitalize="none"
                  value={description}
                  onChangeText={text => setDescription(text)}
                />
              </View>
            </View>
            <View style={[styles.form_Div]}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                    fontSize:17
                  },
                ]}>
                What skills are required for this job?
              </Text>
              <View style={{...styles.action,paddingVertical:10}}>
                <TextInput
                  placeholder="eg PHP, SEO"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  value={skills}
                  onChangeText={text => setSkills(text)}
                />
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
                Job Location:
              </Text>
              <View style={styles.action}>
                <GooglePlacesAutocomplete
                  placeholder="Job Location"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {width: '100%', height: '100%', marginLeft: 5},
                  ]}
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setCity(data.description);
                  }}
                  query={{
                    key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
                    language: 'en',
                  }}
                />
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
                Required level for this job?
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="Entry level"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  value={careerLevel}
                  autoCapitalize="none"
                  onChangeText={text => setCareerLevel(text)}
                />
              </View>
            </View>

            <View
              style={[
                styles.form_Div,
              ]}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                Job Type:
              </Text>

              <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  borderBottomWidth: 2,
                  borderBottomColor: '#fff',
                  paddingVertical:5
                }}  >
                <Text style={{color: '#fff'}}>Full Time</Text>

                <RadioButton
                  value="Full Time"
                  color='#fff'
                  status={JobTime === 'Full Time' ? 'checked' : 'unchecked'}
                  onPress={() => setJobTIme('Full Time')}
                />

                <Text style={{color: '#fff'}}>Part Time</Text>
                <RadioButton
                  value="Part Time"
                  color='#fff'
                  status={JobTime === 'Part Time' ? 'checked' : 'unchecked'}
                  onPress={() => setJobTIme('Part Time')}
                />
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
                No of Position:
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="No of Position"
                  keyboardType="number-pad"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  value={numofPos}
                  onChangeText={text => setNumofPos(text)}
                />
              </View>
              <View></View>

              <View style={{backgroundColor: '#000', height: 5}}></View>
              <View style={[styles.form_Div]}>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Years of Experience Required?
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="Min"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        borderRightWidth: 1,
                      },
                    ]}
                    KeyboardType="number-pad"
                    onChangeText={text => setExp_min(text)}
                    value={exp_min}
                  />
                  <TextInput
                    placeholder="Max"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    KeyboardType="number-pad"
                    onChangeText={text => setExp_max(text)}
                    value={exp_max}
                  />
                </View>
              </View>
              <View></View>
              <View style={{backgroundColor: '#000', height: 5}}></View>
              <View style={styles.form_Div}>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: '#fff',
                      
                    },
                  ]}>
                  what is the Salary of this Job?
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="From"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        borderRightWidth: 1,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={text => setSalary_from(text)}
                    value={salary_from}
                  />
                  <TextInput
                    placeholder="To"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={text => setSalary_to(text)}
                    value={salary_to}
                  />
                </View>
              </View>
              <View></View>
              <View style={{backgroundColor: '#000', height: 5}}></View>
              <View style={styles.form_Div}>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Minimum Qualification Required?
                </Text>
                <View style={styles.action}>
                  <TextInput
                    placeholder="From"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                        borderRightWidth: 1,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={text => setDegree(text)}
                    value={degree}
                  />
                  <TextInput
                    placeholder="To"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={text => setCriteria(text)}
                    value={criteria}
                  />
                </View>
              </View>
            </View>
            <View style={{backgroundColor: '#000', height: 5}}></View>
            <View style={styles.form_Div}>
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: '#fff',
                  },
                ]}>
                is there any Gender Reference ?
              </Text>
              <View style={styles.action}>
                <TextInput
                  placeholder="Gender"
                  placeholderTextColor="#666666"
                  style={[
                    styles.textInput,
                    {
                      color: colors.text,
                    },
                  ]}
                  autoCapitalize="none"
                  onChangeText={text => setGender(text)}
                  value={gender}
                />
              </View>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => GetLatLng()}>
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
                    Post Job
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </ScrollView>
    );
};

export default PostJob;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#000000',

    },
    header: {
       
       justifyContent:'center',
       alignContent:'center',
       color:'#fff'
    },
    footer: {
        flex: 22,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign:'center'
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