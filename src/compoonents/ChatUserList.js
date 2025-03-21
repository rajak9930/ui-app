import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { useNavigation } from '@react-navigation/native';
  
  let UserData = [
    {
      id: '1',
      image: 'https://picsum.photos/200/300',
      name: 'Jesse',
      title: 'I’ve been working on finding a different fabric stor...',
      day: 'Friday',
      active: true,
    },
    {
      id: '2',
      image: 'https://picsum.photos/200/300',
      name: 'Jesse',
      title: 'I’ve been working on finding a different fabric stor...',
      day: 'Friday',
      active: true,
    },
    {
      id: '3',
      image: 'https://picsum.photos/200/300',
      name: 'Jesse',
      title: 'I’ve been working on finding a different fabric stor...',
      day: 'Friday',
      active: true,
    },
    {
      id: '4',
      image: 'https://picsum.photos/200/300',
      name: 'Jesse',
      title: 'I’ve been working on finding a different fabric stor...',
      day: 'Friday',
      active: true,
    },
  ];
  
  const ChatUserList = () => {
    const navigation = useNavigation();
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('ChatScreen')}
        style={styles.card}
      >
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <View style={styles.rowSpaceBetween}>
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardDay}>{item.day}</Text>
          </View>
          <View style={styles.rowSpaceBetween}>
            <Text numberOfLines={1} style={styles.cardTitle}>
              {item.title}
            </Text>
            <AntDesign name="right" size={18} color="#767676" />
          </View>
        </View>
      </TouchableOpacity>
    );
  
    return <FlatList data={UserData} keyExtractor={(item) => item.id} renderItem={renderItem} />;
  };
  
  export default ChatUserList;
  
  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingBottom: 15,
    },
    cardImage: {
      width: 50,
      height: 50,
      borderRadius: 25, 
    },
    cardContent: {
      flex: 1,
      borderBottomColor: '#B6B6B6',
      borderBottomWidth: 0.5,
      paddingBottom: 10,
    },
    rowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardName: {
      color: '#000000',
      fontWeight: '700',
      fontSize: 20,
    },
    cardDay: {
      color: '#767676',
      fontWeight: '300',
      fontSize: 10,
    },
    cardTitle: {
      color: '#000000',
      fontWeight: '300',
      fontSize: 13,
      width: '75%',
    },
  });
  