// //   setTimeout(()=>{
// //         callOUtFunc()
// //          },5000)
// }
    
// // setTimeout(()=>{
// //     const myData= {LONGITUDE:LONGITUDE,LATITUDE:LATITUDE,Mylocation:Mylocation }
// //     navigation.push("ExploreScreen",myData)


// // },4000)

// import React, {useState,useEffect} from 'react';
// import {View, Text,TouchableOpacity,ImageBackground,TextInput, StyleSheet,ScrollView} from 'react-native';
// import {useTheme} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import BottomSheet from 'reanimated-bottom-sheet';
// import Animated from 'react-native-reanimated';
// import ImagePicker from 'react-native-image-crop-picker';
// import { data } from '../model/data';


// const EditProfileScreen = ({navigation, route}) => {
  
 
   
//   const[email, setEmail]= useState(route.params.email)
//   const[b_name, setBname]=useState(route.params.b_name)
//   const[b_area, setBarea]=useState(route.params.b_area)
//   const[b_location, setBlocation]=useState(route.params.b_location)
//   const[b_faranchise, setBfranchise]=useState(route.params.b_faranchise)
//   const[m_name, setMName]= useState(route.params.m_name)
//   const[job_role, setJobRole]=useState(route.params.job_role)
//   const[m_phone, setMobile]=useState(route.params.m_phone)
//   const[t_phone, SetPhone]=useState(route.params.t_phone)

 





//   // const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
//   // const {colors} = useTheme();

//   // const takePhotoFromCamera = () => {
//   //   ImagePicker.openCamera({
//   //     compressImageMaxWidth: 300,
//   //     compressImageMaxHeight: 300,
//   //     cropping: true,
//   //     compressImageQuality: 0.7
//   //   }).then(image => {
//   //     console.log(image);
//   //     setImage(image.path);
//   //     // this.bs.current.snapTo(1);
//   //   });
//   // }

//   // const choosePhotoFromLibrary = () => {
//   //   ImagePicker.openPicker({
//   //     width: 300,
//   //     height: 300,
//   //     cropping: true,
//   //     compressImageQuality: 0.7
//   //   }).then(image => {
//   //     console.log(image);
//   //     setImage(image.path);
//   //     // this.bs.current.snapTo(1);
//   //   });
//   // }

//   // renderInner = () => (
//   //   <View style={styles.panel}>
//   //     <View style={{alignItems: 'center'}}>
//   //       <Text style={styles.panelTitle}>Upload Photo</Text>
//   //       <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
//   //     </View>
//   //     <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
//   //       <Text style={styles.panelButtonTitle}>Take Photo</Text>
//   //     </TouchableOpacity>
//   //     <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
//   //       <Text style={styles.panelButtonTitle}>Choose From Library</Text>
//   //     </TouchableOpacity>
//   //     <TouchableOpacity
//   //       style={styles.panelButton}
//   //       onPress={() => this.bs.current.snapTo(1)}>
//   //       <Text style={styles.panelButtonTitle}>Cancel</Text>
//   //     </TouchableOpacity>
//   //   </View>
//   // );

//   // renderHeader = () => (
//   //   <View style={styles.header}>
//   //     <View style={styles.panelHeader}>
//   //       <View style={styles.panelHandle} />
//   //     </View>
//   //   </View>
//   // );

//   // bs = React.createRef();
//   // fall = new Animated.Value(1);

//   return (
  
//     <View style={styles.container}>
//       {/* <BottomSheet
//         ref={this.bs}
//         snapPoints={[330, 0]}
//         renderContent={this.renderInner}
//         renderHeader={this.renderHeader}
//         initialSnap={1}
//         callbackNode={this.fall}
//         enabledGestureInteraction={true}
//       /> */}
//       <ScrollView>
//       <Animated.View style={{margin: 20,
//         opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
//     }}>
//         <View style={{alignItems: 'center'}}>
//           <TouchableOpacity>
//             <View
//               style={{
//                 height: 100,
//                 width: 100,
//                 borderRadius: 15,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <ImageBackground
//                 source={{
//                   uri: image,
//                 }}
//                 style={{height: 100, width: 100}}
//                 imageStyle={{borderRadius: 15}}>
//                 <View
//                   style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <Icon
//                     name="camera"
//                     size={35}
//                     color="#fff"
//                     style={{
//                       opacity: 0.7,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       borderWidth: 1,
//                       borderColor: '#fff',
//                       borderRadius: 10,
//                     }}
//                   />
//                 </View>
//               </ImageBackground>
//             </View>
//           </TouchableOpacity>
//           <Text style={{marginTop: 10,marginBottom:19, fontSize: 18, fontWeight: 'bold'}}>
//             Update Your Profile
//           </Text>
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Business Name:</Text>
//         <View style={styles.action}>
         
//           <FontAwesome name="user-o" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Business Name"
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             value={b_name}
//             onChangeText={(text)=>setBname(text)}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Business Franchise:</Text>
//         <View style={styles.action}>
//           <FontAwesome name="user-o" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Business Franchise"
//             placeholderTextColor="#666666"
//             value={b_faranchise}
//             onChangeText={(text)=>setBfranchise(text)}
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Manager Name:</Text>
//         <View style={styles.action}>
//           <FontAwesome name="user-o" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Manager Name"
//             placeholderTextColor="#666666"
//             value={m_name}
//             onChangeText={(text)=>setMName(text)}
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Job Role:</Text>
//         <View style={styles.action}>
//           <FontAwesome name="user-o" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Job Role"
//             placeholderTextColor="#666666"
//             value={job_role}
//             onChangeText={(text)=>setJobRole(text)}
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Manager Name:</Text>
//         <View style={styles.action}>
//           <FontAwesome name="user-o" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Manager Name"
//             placeholderTextColor="#666666"
//             value={m_name}
//             onChangeText={(text)=>setMName(text)}
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Phone Number:</Text>
//         <View style={styles.action}>
//           <Feather name="phone" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Phone"
//             placeholderTextColor="#666666"
//             keyboardType="number-pad"
//             value={t_phone}
//             onChangeText={(text)=>SetPhone(text)}
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Mobile Number:</Text>
//         <View style={styles.action}>
//           <Feather name="phone" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Mobile"
//             value={m_phone}
//             onChangeText={(text)=>setMobile(text)}
//             placeholderTextColor="#666666"
//             keyboardType="number-pad"
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Email:</Text>
//         <View style={styles.action}>
//           <FontAwesome name="envelope-o" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Email"
//             placeholderTextColor="#666666"
//             keyboardType="email-address"
//             value={email}
//             onChangeText={(text)=>setEmail(text)}
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Business Area:</Text>
//         <View style={styles.action}>
//           <Icon name="map-marker-outline" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Business Area"
//             value={b_area}
//             onChangeText={(text)=>setBarea(text)}
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
//         <Text style={{marginLeft:10, fontSize:14, fontWeight:'bold'}}>Business Location:</Text>
//         <View style={styles.action}>
//           <Icon name="map-marker-outline" color={colors.text} size={20} />
//           <TextInput
//             placeholder="Business Location"
//             value={b_location}
//             onChangeText={(text)=>setBlocation(text)}
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             style={[
//               styles.textInput,
//               {
//                 color: colors.text,
//               },
//             ]}
//           />
//         </View>
      
//         <TouchableOpacity style={styles.commandButton} onPress={() => func()}>
//           <Text style={styles.panelButtonTitle}>Updata</Text>
//         </TouchableOpacity>
//       </Animated.View>
//       </ScrollView>
//     </View>
    
//   );
  
// };


// export default EditProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   commandButton: {
//     padding: 15,
//     borderRadius: 10,
//     backgroundColor: '#2E2C2B',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   panel: {
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     paddingTop: 20,
//     // borderTopLeftRadius: 20,
//     // borderTopRightRadius: 20,
//     // shadowColor: '#000000',
//     // shadowOffset: {width: 0, height: 0},
//     // shadowRadius: 5,
//     // shadowOpacity: 0.4,
//   },
//   header: {
//     backgroundColor: '#FFFFFF',
//     shadowColor: '#333333',
//     shadowOffset: {width: -1, height: -3},
//     shadowRadius: 2,
//     shadowOpacity: 0.4,
//     // elevation: 5,
//     paddingTop: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   panelHeader: {
//     alignItems: 'center',
//   },
//   panelHandle: {
//     width: 40,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#00000040',
//     marginBottom: 10,
//   },
//   panelTitle: {
//     fontSize: 27,
//     height: 35,
//   },
//   panelSubtitle: {
//     fontSize: 14,
//     color: 'gray',
//     height: 30,
//     marginBottom: 10,
//   },
//   panelButton: {
//     padding: 13,
//     borderRadius: 10,
//     backgroundColor: '#2E2C2B',
//     alignItems: 'center',
//     marginVertical: 7,
//   },
//   panelButtonTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5,
//   },
//   actionError: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#FF0000',
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     paddingLeft: 10,
//     color: '#05375a',
//   },
// });
