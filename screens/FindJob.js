import React ,{useState} from 'react';
import {  View, Text,TouchableOpacity,TextInput,Platform, StyleSheet,StatusBar,FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Geocoder from 'react-native-geocoding';

import {useTheme,Card} from "react-native-paper"

Geocoder.init("AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg");

const FindJob = ({navigation}) => {
    const[skills, setSkills]= useState()
    const[Mylocation, setLocation]= useState()
    
    const { colors } = useTheme();
    const[city,setCity]= useState('')
    const[cities,setCities]= useState([]);
    const[LONGITUDE, setLong]= useState(40.665364)
    const[LATITUDE, setLat]= useState(-74.213377)
  
    


    const ShowResult = ()=>{
     Geocoder.from(Mylocation, {
        southwest: {lat: 36.05, long: -115.25},
        northeast: {lat: 36.16, long: -115.10}})
        .then(json => {
          var location = json.results[0].geometry.location;
          console.log(location);
          setCity(location)
          console.log(location.lat.coords)
          setLong(location.lng)
          setLat(location.lat)
        //   console.log('my lat',LATITUDE)
        console.log("pressed!!")
        })
        .catch(error => console.warn(error));
        // setTimeout(()=>{
        //     const myData= {LONGITUDE:LONGITUDE,LATITUDE:LATITUDE,Mylocation:Mylocation }
        //     navigation.push("ExploreScreen",myData)
        // },5000)
    
    // Search by geo-location (reverse geo-code)
    Geocoder.from(33.6844,73.0479)
        .then(json => {
                var addressComponent = json.results[0].address_components[0];
          console.log(addressComponent);
        })
        .catch(error => console.warn(error));
    }
    
    const callOUtFunc=()=>{
            const myData= {LONGITUDE:LONGITUDE,LATITUDE:LATITUDE,Mylocation:Mylocation }
            navigation.push("ExploreScreen",myData)  
    }

    const FetchCity=(text)=>{
        setLocation(Mylocation)
       
       fetch("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query="+text+"&locationType=city&format=json")    
     .then(res=>res.json())    
     .then(data=>{    
      setCities(data.location.address.slice(0,9))
      console.log(data.location.address.slice(0,9))
   })

   
   }
   const cityList=  (cityname)=>{
    setLocation(cityname)
    ShowResult()
    
  }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#E2E2E2' barStyle="light-content"/>
        <View style={styles.header}>
          
         <Text style={styles.text_header}>Find a Future </Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Skills</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="ios-text"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                  value={skills}
                  onChangeText={(text)=>setSkills(text)}
                    placeholder=" Job title keywords, or Company"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                   
                />
            </View>
            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Location</Text>
            <Text style={{fontSize:15,marginLeft:10,marginBottom:3}}>city, province, or region</Text>
            <View style={styles.action}>
                <Ionicons name="location-on"
                color={colors.text}
                size={25}
                />
                <TextInput 
                value={Mylocation}
                onChangeText={(text)=>FetchCity(text)}
                    placeholder="City Province Or Region"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                />
               
            </View>
        
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>callOUtFunc()}
                    
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text  style={[styles.textSign, {
                        color:'#fff'
                    }]}>Find Job</Text>
                </LinearGradient>
                </TouchableOpacity>

            </View>
            <FlatList
              data={cities}
              renderItem={({item})=>{
                return(
                  <Card onPress={()=>cityList(item)} style={{margin:3, padding:12}}>
                    <Text>{item}</Text>
                  </Card>
                )
              }}
              keyExtractor={(item)=>{item}}
            />

        </Animatable.View>
      </View>
    );
};

export default FindJob;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#000000'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft:10,
        marginBottom:-10,

    },
    text_footer: {
        color: '#05375a',
        fontSize: 28,
        marginLeft:10,
      

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
        paddingLeft: 10,
        color: '#05375a',
        fontSize:18,
        borderBottomWidth:1,
        marginLeft:4
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
        borderRadius: 10,
       
    },
    textSign: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    imgstyle:{
        height:70,
        borderRadius:20,
        marginBottom:-20

        
    }
  });