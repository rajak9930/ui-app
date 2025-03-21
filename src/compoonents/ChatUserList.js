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
import {useNavigation} from '@react-navigation/native';
let UserData = [
  {
    id: '1',
    image: 'https://picsum.photos/200/300',
    name: 'jesse',
    title: 'I’ve been working on finding a different fabric stor...',
    day: 'friday',
    active: true,
  },
  {
    id: '2',
    image: 'https://picsum.photos/200/300',
    name: 'jesse',
    title: 'I’ve been working on finding a different fabric stor...',
    day: 'friday',
    active: true,
  },
  {
    id: '3',
    image: 'https://picsum.photos/200/300',
    name: 'jesse',
    title: 'I’ve been working on finding a different fabric stor...',
    day: 'friday',
    active: true,
  },
  {
    id: '4',
    image: 'https://picsum.photos/200/300',
    name: 'jesse',
    title: 'I’ve been working on finding a different fabric stor...',
    day: 'friday',
    active: true,
  },
];
const ChatUserList = () => {
  const Navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => Navigation.navigate('ChatScreen')}
      style={styles.card}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <View
        style={{
          borderBottomColor: '#B6B6B6',
          borderBottomWidth: 0.5,
          paddingBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.cardName}>{item.name}</Text>
          <Text>friday</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text numberOfLines={1} style={styles.cardTitle}>
            {item.title}
          </Text>
          <AntDesign name="right" size={18} color="#767676" />
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={UserData}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
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
    borderRadius: 50,
  },
  cardName: {
    color: '#000000',
    fontVariant: '700',
    fontSize: 20,
  },
  cardDay: {
    color: '#767676',
    fontVariant: '300',
    fontSize: 10,
  },
  cardTitle: {
    color: '#000000',
    fontVariant: '300',
    fontSize: 13,
    width: '75%',
  },
});
