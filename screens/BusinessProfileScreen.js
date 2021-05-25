import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import files from '../assets/filesBase64';

const BusinessProfileScreen = ({ navigation, route }) => {


  let mydata =route.params;
  //console.log(mydata.BusinessName);
  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from joblocator App. I've already ordered more than 10 meals on it.",
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              {mydata.managerName}
            </Title>
            <Caption style={styles.caption} />
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name="map-marker-radius"
              color="#777777"
              style={{ marginTop: 7 }}
              size={20}
            />
            <Title>JobRole</Title>
            <Text
              style={{
                color: '#777777',
                fontSize: 22,
                marginTop: 2,
                marginLeft: 20,
              }}>
              {mydata.JobRole}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Title>Location:</Title>
            <Text
              style={{
                color: '#777777',
                marginTop: 2,
                fontSize: 22,
                marginLeft: 20,
              }}>
              {mydata.location}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="phone" color="#777777" size={23} />
            <Title>Phone Number:</Title>
            <Text
              style={{
                color: '#777777',
                marginTop: 2,
                fontSize: 22,
                marginLeft: 20,
              }}>
              {mydata.phoneNumber}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="email" color="#777777" size={20} />
            <Title>Email</Title>
            <Text
              style={{
                color: '#777777',
                marginTop: 2,
                fontSize: 22,
                marginLeft: 20,
              }}>
              {mydata.email}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Icon name="email" color="#777777" size={20}/>
            <Text style={{ color: '#777777', marginLeft: 20 }}>
              {mydata.faranchise}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="email" color="#777777" size={20}/>
             <Title>Business Name</Title>
            <Text
              style={{
                color: '#777777',
                marginTop: 2,
                fontSize: 22,
                marginLeft: 20,
              }}>
              {mydata.BusinessName}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="email" color="#777777" size={20} />
            <Title>BusinessType:</Title>
            <Text
              style={{
                color: '#777777',
                marginTop: 2,
                fontSize: 22,
                marginLeft: 20,
              }}>
              {mydata.BusinessType}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="email" color="#777777" size={20} />
            <Title>Mobile Number</Title>
            <Text
              style={{
                color: '#777777',
                marginTop: 2,
                fontSize: 22,
                marginLeft: 20,
              }}>
              {mydata.BusinessType}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            {mydata.BusinessType}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            {mydata.BusinessType}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: '#777777', marginLeft: 20 }}>
            {mydata.mobile}
          </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>₹140.50</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#2E2C2B" size={25} />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#2E2C2B" size={25} />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#2E2C2B" size={25} />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#2E2C2B" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => { }}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#2E2C2B" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default BusinessProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
