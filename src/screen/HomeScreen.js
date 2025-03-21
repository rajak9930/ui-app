import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ChatUserList from '../compoonents/ChatUserList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name="arrowleft" size={30} color="#000000" />
        <Feather name="edit" size={30} color="#000000" />
      </View>
      <View style={styles.search}>
        <AntDesign name="search1" size={25} color="##929292" />
        <TextInput
          placeholder="Search messages or Circles"
          placeholderTextColor={'#767676'}
          style={styles.input}
        />
      </View>
      <View>
        <View style={styles.ChatHeader}>
          <Text style={{color: '#000000', fontWeight: '700', fontSize: 25}}>
            Chats
          </Text>
          <Text style={{color: '#000000', fontWeight: '400', fontSize: 15}}>
            Edit
          </Text>
        </View>
        <ChatUserList/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: '#ffff',
    flex:1
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    marginVertical: 20,
    borderColor: '#929292',
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 2,
  },
  input: {},
  ChatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom:25
  },
});
