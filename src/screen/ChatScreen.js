import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Actions,
} from 'react-native-gifted-chat';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    // {
    //   _id: 1,
    //   text: 'Hello developer',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //     avatar: 'https://placeimg.com/140/140/any',
    //   },
    // },
  ]);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  const handleAttachment = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          DocumentPicker.types.doc,
        ],
      });

      let newMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: {_id: 1, name: 'You'},
      };

      if (res.type.includes('image')) {
        newMessage.image = res.uri;
      } else {
        newMessage.text = `📄 ${res.name}`;
        newMessage.file = res.uri;
      }

      onSend([newMessage]);
    } catch (error) {
      console.log('Attachment Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.header, {paddingHorizontal: 15, paddingVertical: 20}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="#000000" />
        </TouchableOpacity>

        <Entypo name="dots-three-horizontal" size={30} color="#000000" />
      </View>
      <Text style={styles.nameHeader}>Raja</Text>
      <View style={{borderBottomWidth: 0.5, borderBlockColor: '#9F9D9E'}} />

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{_id: 1, name: 'You'}}
        renderActions={props => (
          <Actions
            {...props}
            onPressActionButton={handleAttachment}
            icon={() => <Ionicons name="attach" size={24} color="black" />}
          />
        )}
        renderBubble={props => (
          <Bubble
            {...props}
            wrapperStyle={{
              left: {backgroundColor: '#ffd700', padding: 10, borderRadius: 10},
              right: {backgroundColor: '#0078ff'},
            }}
          />
        )}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: '#fff',
              borderTopWidth: 1,
              borderColor: '#ddd',
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameHeader: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
