import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
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
  const [inputText, setInputText] = useState('');

  const [messages, setMessages] = useState([]);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
    setInputText('');
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

      console.log('Selected File:', res);

      let newMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: {_id: 1, name: 'You'},
      };

      const fileUri = res.uri || res.fileCopyUri;

      if (res.type.startsWith('image/')) {
        newMessage.image = fileUri;
      } else {
        newMessage.text = res.name || 'File';
        newMessage.file = fileUri;
      }

      onSend([newMessage]);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
      } else {
        console.error('Attachment Error:', error);
      }
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
            icon={() => (
              <AntDesign name="pluscircleo" size={24} color="black" />
            )}
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
        keyboardShouldPersistTaps="handled"
        renderInputToolbar={props => (
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10,marginVertical:10 }}>
          <View style={[styles.inputContainer, { flex: 1 }]}>
            <TextInput
              style={styles.input}
              placeholder="Message"
              value={inputText}
              onChangeText={setInputText}
            />
            <TouchableOpacity
              onPress={() =>
                onSend([
                  {
                    _id: Math.random().toString(),
                    text: inputText,
                    createdAt: new Date(),
                    user: { _id: 1, name: 'You' },
                  },
                ])
              }
              style={styles.iconButton}
            >
              <AntDesign name="arrowup" size={22} color="#0078ff" />
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity onPress={handleAttachment} style={styles.iconButton}>
            <AntDesign name="plus" size={30} color="#000000" />
          </TouchableOpacity>
        </View>
        
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#F5F5F5',
    borderWidth:1,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent:'space-between'
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  iconButton: {
    padding: 10,
    backgroundColor:'#F5F5F5',
    borderRadius:50
  },
});
