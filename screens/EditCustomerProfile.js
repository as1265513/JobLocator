import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Calender from 'react-native-vector-icons/Feather';

const EditProfileScreen = ({navigation, route}) => {
  const [email, setEmail] = useState(route.params.email);
  const [f_name, setFName] = useState(route.params.f_name);
  const [l_name, setLName] = useState(route.params.l_name);
  const [birthday, setBirthday] = useState(route.params.birthday);
  const [age, setAge] = useState(route.params.age);
  const [postcode, setPostcode] = useState(route.params.postcode);
  const [e_status, setStatus] = useState(route.params.e_status);
  const [birthdayValid, setBirthdayValid] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const {colors} = useTheme();

  const ValidationFunc = type => {
    let namereg = /^[A-Za-z]+$/;
    let emailreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let numberreg = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
    let passwordreg = /(?=.{8,})/;
    let Postcode = /^[0-9]{5}$/;

    if (type === 'firstName') {
      if (namereg.test(FirstName)) {
        setFirstNamevalid(true);
      } else {
        setFirstNamevalid(false);
      }
    } else if (type === 'LastName') {
      if (namereg.test(LastName)) {
        setLastNamevalid(true);
      } else {
        setLastNamevalid(false);
      }
    } else if (type === 'email') {
      if (emailreg.test(Email)) {
        setEmailvalid(true);
      } else {
        setEmailvalid(false);
      }
    } else if (type === 'password') {
      if (passwordreg.test(password)) {
        setPasswordvalid(true);
      } else {
        setPasswordvalid(false);
      }
    } else if (type === 'birthday') {
      if (namereg.test(birthday)) {
        setBirthdayValid(true);
      } else {
        setBirthdayValid(false);
      }
    } else if (type === 'age') {
      if (namereg.test(age)) {
        setAgevalid(true);
      } else {
        setAgevalid(false);
      }
    } else if (type === 'postCode') {
      if (Postcode.test(postcode)) {
        setpostcodevalid(true);
      } else {
        setpostcodevalid(false);
      }
    } else if (type === 'EmpField') {
      if (namereg.test(Empstatus)) {
        setEmpvalid(true);
      } else {
        setEmpvalid(false);
      }
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    month = month + 1;
    // console.log('A date has been picked: ' + day + '-' + month + '-' + year);
    let exdate = day + '-' + month + '-' + year;
    setBirthday(exdate);
    // console.log(birthday)
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Animated.View style={{marginTop: 20, backgroundColor: '#000'}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 15,
                color: '#fff',
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              Update Your Profile
            </Text>
          </View>
          <View style={styles.form_Div}>
            <Text style={styles.text_Style}>Email:</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={email}
                onChangeText={text => setEmail(text)}
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
            <Text style={styles.text_Style}>First Name:</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                value={f_name}
                onChangeText={text => setFName(text)}
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
            <Text style={styles.text_Style}>Last Name:</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#666666"
                value={l_name}
                onChangeText={text => setLName(text)}
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
          {/*  //Date Of birth */}
          <View style={styles.form_Div}>
            <Text
              style={[
                styles.text_footer,
                {
                  color: '#fff',
                },
              ]}>
              Date of Birth:
            </Text>
            <View style={[styles.actionB]}>
              <TextInput
                placeholder="dd/mm/yyyy"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput1,
                  !birthdayValid ? styles.error_Style : null,
                ]}
                autoCapitalize="none"
                onEndEditing={() => ValidationFunc('birthdayField')}
                name="birthday"
                value={birthday}
                onChangeText={text => setBirthday(text)}
              />
              <TouchableOpacity
                style={{justifyContent: 'center'}}
                onPress={() => showDatePicker()}>
                <Calender
                  name="calendar"
                  color="#fff"
                  size={20}
                  style={{marginRight: 13}}
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
            {!birthdayValid ? (
              <Animatable.Text
                duration={1500}
                animation="bounceInLeft"
                style={{color: 'red', paddingLeft: 20}}>
                Please enter you birthday
              </Animatable.Text>
            ) : null}
          </View>
          <View style={styles.form_Div}>
            <Text style={styles.text_Style}>Age:</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Age"
                placeholderTextColor="#666666"
                value={age}
                onChangeText={text => setAge(text)}
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
            <Text style={styles.text_Style}>Status:</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Status"
                placeholderTextColor="#666666"
                value={e_status}
                onChangeText={text => setStatus(text)}
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
            <Text style={styles.text_Style}>Post Code:</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Post Code"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                value={postcode}
                onChangeText={text => setPostcode(text)}
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
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => alert("ok")}>
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
                  Update Profile
                </Text>
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
    marginTop: 50,
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
    fontWeight: 'bold',
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
    backgroundColor: '#fff',
    borderRadius: 4,
    marginLeft: 15,
    paddingLeft: 17,
    paddingTop: 3,
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
  form_Div: {
    backgroundColor: '#000',
    borderRadius: 15,
    marginTop: 5,
  },
  text_Style: {
    marginLeft: 15,
    color: '#fff',
    borderColor: '#fff',
    height: 35,
    borderColor: '#3F0000',
    borderWidth: 3,
    fontSize: 14,
    marginTop: 10,
    paddingTop: 6,
    paddingLeft: 28,
    fontWeight: 'bold',
  },
  text_footer: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 4,
    borderWidth: 4,
    marginRight: 9,
    height: 40,
    paddingLeft: 10,
    paddingTop: 5,
    borderColor: '#3F0000',
  },
  actionB: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput1: {
    flex: 1,

    marginRight: 8,
    color: '#05375a',
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingLeft: 8,
  },
  error_Style: {
    borderBottomWidth: 1,
    borderColor: '#B70000',
    borderRadius: 18,
  },
});
