import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Linking, Platform} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../components/context';
import AsyncStorage from '@react-native-community/async-storage';
import { set } from 'react-native-reanimated';

export function DrawerContent({route,navigation},props) {
  const [data, setData] = useState({
    email: '',
    l_name: '',
    f_name: '',
    customer: '',
    postcode: '',
    birthday: '',
    age: '',
    type: '',
    b_area: '',
    b_location: '',
    b_faranchise: '',
    m_name: '',
    job_role: '',
    m_phone: '',
    t_phone: '',
    b_type: '',
    b_name: '',
    id: '',
  });

  const [BType, setbType] = useState();
  const [Page, setPage] = useState('');

  const [customerData, setCustomerData] = useState({
    f_name: '',
    l_name: '',
    birthday: '',
    age: '',
    postcode: '',
    e_status: '',
    email: '',
    password: '',
    id: '',
  });

  const paperTheme = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  useEffect(() => {
    setPage(route?.params?.page)
  }, []);

  const func = async () => {
    let getData = await AsyncStorage.getItem('mynewdata');

    let Type = JSON.parse(getData).type;
    setbType(Type);
    if (Type === 'bussines') {
      setData({
        email: JSON.parse(getData).email,
        type: JSON.parse(getData).type,
        t_phone: JSON.parse(getData).business.t_phone,
        m_phone: JSON.parse(getData).business.m_phone,
        b_name: JSON.parse(getData).business.b_name,
        b_location: JSON.parse(getData).business.b_location,
        b_faranchise: JSON.parse(getData).business.b_faranchise,
        m_name: JSON.parse(getData).business.m_name,
        job_role: JSON.parse(getData).business.job_role,
        b_type: JSON.parse(getData).business.b_type,
        b_area: JSON.parse(getData).business.b_area,
        id: JSON.parse(getData).business.id,
        type: JSON.parse(getData).business.type,
      });
    } else {
      setCustomerData({
        f_name: JSON.parse(getData).customer.f_name,
        l_name: JSON.parse(getData).customer.l_name,
        birthday: JSON.parse(getData).customer.birthday,
        age: JSON.parse(getData).customer.age,
        postcode: JSON.parse(getData).customer.postcode,
        e_status: JSON.parse(getData).customer.e_status,
        email: JSON.parse(getData).email,
        id: JSON.parse(getData).id,
      });
      console.log('Custmer Section');
    }
  };

  useEffect(async () => {
    func();
  }, []);

  const DiaURL = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${data.m_phone}`);
    } else {
      Linking.openURL(`telepromt:${data.m_phone}`);
    }
  };

  const Dem = async () => {
    await AsyncStorage.removeItem('Token', err => console.log('finished', err));
    props.navigation.navigate('LoginScreen');
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        {BType === 'bussines' ? (
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                {/* <Avatar.Image 
                       source={{
                           uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                       }}
                       size={50}
                   /> */}
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Caption
                    onPress={() => Linking.openURL(`mailto:${data.email}`)}
                    style={styles.caption}>
                    {data.email}
                  </Caption>
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#3F0000',
                marginTop: 5,
              }}></View>

            <Drawer.Section style={styles.drawerSection}>
              {/* <DrawerItem 
                   icon={({color, size}) => (
                       <Icon 
                       name="home-outline" 
                       color={color}
                       size={size}
                       />
                   )}
                   label="Contact"
                   onPress={() => {props.navigation.navigate('Home')}}
               /> */}

              <View style={styles.content_style}>
                <Title>Business Name:</Title>
                <Text style={styles.text_style}>{data.b_name}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Business Area:</Title>
                <Text style={styles.text_style}>{data.b_area}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Business Location:</Title>
                <Text style={styles.text_style}>{data.b_location}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Business Franchise:</Title>
                <Text style={styles.text_style}>{data.b_faranchise}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Manager Name:</Title>
                <Text style={styles.text_style}>{data.m_name}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Job Role:</Title>
                <Text style={styles.text_style}>{data.job_role}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Mobile Number:</Title>
                <Text onPress={DiaURL} style={styles.text_style}>
                  {data.m_phone}
                </Text>
              </View>
              <View style={{alignItems: 'center', marginTop: 20}}>
                <Title>Phone Number:</Title>
                <Text style={styles.text_style}>{data.t_phone}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Adress:</Title>
                <Text style={styles.text_style}>DiKhan</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Skills:</Title>
                <Text style={styles.text_style}>HTML, CSS, REACT</Text>
              </View>
            </Drawer.Section>
            <Drawer.Section style={{marginTop: 20}}>
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={paperTheme.dark} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
            {/* Note to set */}
            
              {Page=="Profile" ? (<Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                  icon={({color}) => (
                    <Icon name="account-edit" color={color} size={30} />
                  )}
                  label="Edit"
                  onPress={() =>
                    navigation.navigate('EditbusinessProfileScreen', data)
                  }
                />
              </Drawer.Section>):null}
            
          </View>
        ) : (
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                {/* <Avatar.Image 
                       source={{
                           uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                       }}
                       size={50}
                   /> */}
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Caption style={styles.caption}>{customerData.email}</Caption>
                </View>
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                borderColor: '#3F0000',
                marginTop: 5,
              }}></View>

            <Drawer.Section style={styles.drawerSection}>
              {/* <DrawerItem 
                   icon={({color, size}) => (
                       <Icon 
                       name="home-outline" 
                       color={color}
                       size={size}
                       />
                   )}
                   label="Contact"
                   onPress={() => {props.navigation.navigate('Home')}}
               /> */}

              <View style={styles.content_style}>
                <Title>Name:</Title>
                <Text style={styles.text_style}>
                  {customerData.f_name} {customerData.l_name}
                </Text>
              </View>
              <View style={styles.content_style}>
                <Title>Age:</Title>
                <Text style={styles.text_style}>{customerData.age}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Date Of Birth:</Title>
                <Text style={styles.text_style}>{customerData.birthday}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Postcode:</Title>
                <Text style={styles.text_style}>{customerData.postcode}</Text>
              </View>
              <View style={styles.content_style}>
                <Title>Status:</Title>
                <Text style={styles.text_style}>{customerData.e_status}</Text>
              </View>
            </Drawer.Section>
            <Drawer.Section style={{marginTop: 20}}>
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={paperTheme.dark} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
            {
                Page=="Profile" ? (<Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                icon={({color}) => (
                  <Icon name="account-edit" color={color} size={30} />
                )}
                label="Edit"
                onPress={() =>
                  navigation.navigate('EditCustomerProfile', customerData)
                }
              />
            </Drawer.Section>):null
            }
          </View>
        )}
      </DrawerContentScrollView>
      
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 19,
    lineHeight: 29,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  content_style: {
    marginLeft: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  text_style: {
    fontSize: 17,
  },
});
