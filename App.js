import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, FlatList } from 'react-native';

export default function App() {
  
  // Create sample data for the chat list
  const chatList = [
    {id:1, image: require('./assets/User-John.jpg'), name: 'John', message: 'Hello there!', date: '2024-12-30'},
    {id:2, image: require('./assets/User-Alice.jpg'), name: 'Alice', message: 'How are you today.', date: '2024-10-25'},
    {id:3, image: require('./assets/User-Generic.png'), name: 'Peter', message: 'Did you get my email', date: '2024-11-27'},
    {id:4, image: require('./assets/User-Smith.jpg'), name: 'Smith', message: 'I use Arch BTW.', date: '2024-12-29'},
    {id:5, image: require('./assets/User-Generic.png'), name: 'Brian', message: 'Great hearing from you have a nice day', date: '2024-12-30'},
    {id:6, image: require('./assets/User-John.jpg'), name: 'John', message: 'Hello there!', date: '2024-12-30'},
    {id:7, image: require('./assets/User-Alice.jpg'), name: 'Alice', message: 'How are you today.', date: '2024-10-25'},
    {id:8, image: require('./assets/User-Generic.png'), name: 'Peter', message: 'Did you get my email', date: '2024-11-27'},
    {id:9, image: require('./assets/User-Smith.jpg'), name: 'Smith', message: 'I use Arch BTW.', date: '2024-12-29'},
    {id:10, image: require('./assets/User-Generic.png'), name: 'Brian', message: 'Great hearing from you have a nice day', date: '2024-12-30'},
    {id:11, image: require('./assets/User-John.jpg'), name: 'John', message: 'Hello there!', date: '2024-12-30'},
    {id:12, image: require('./assets/User-Alice.jpg'), name: 'Alice', message: 'How are you today.', date: '2024-10-25'},
    {id:13, image: require('./assets/User-Generic.png'), name: 'Peter', message: 'Did you get my email', date: '2024-11-27'},
    {id:14, image: require('./assets/User-Smith.jpg'), name: 'Smith', message: 'I use Arch BTW.', date: '2024-12-29'},
    {id:15, image: require('./assets/User-Generic.png'), name: 'Brian', message: 'Great hearing from you have a nice day', date: '2024-12-30'},
  ];
  
  // Create a default function to display the chat list
  const displayChatList = () => {
    return chatList.map((chat, index) => {
      return (
        <View key={index} style={styles.chatBox}>
          <Image source={chat.image} style={styles.userImg} />
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text>{chat.name}</Text>
              <Text>{chat.date}</Text>
            </View>
            <Text>{chat.message}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>

      {/* This View is the top heading section */}
      <View style={styles.appHeading}>
        <Text style={styles.whatsAppLogo}>WhatsApp</Text>
        
        <View style={{flexDirection: 'row'}}>
          <Image source={require('./assets/WhatsApp-Camera.png')} style={{width: 40, height: 40}} />
          <Image source={require('./assets/WhatsApp-ThreeDots.png')} style={{width: 40, height: 40}} />
        </View>

      </View>

      {/* Middle Section: List of chats */}
      <View style={{width: '100%', height: '80%'}}>
      <FlatList
        data={chatList}
        renderItem={({ item }) => (

          <View key={item.id} style={styles.chatBox}>
            
            {/* User Image */}
            <View style={{width:'20%'}}>
              <Image source={item.image} style={styles.userImg} />
            </View>
            
            {/* Text box to the right of image */}
            <View style={{width:'80%', marginLeft: '1%'}}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.name}</Text>
                <Text>{item.date}</Text>
              </View>
              <Text style={{paddingTop: 5}}>{item.message}</Text>
            </View>

          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>


      <View style={{ width: '100%', height: '8%', paddingTop: '1%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around' }}>
        
        {/* Chats */}
        <View style={{ alignItems: 'center' }}> 
          <Image source={require('./assets/WhatsApp-LowerMenu-Chats.png')} style={{ width: 40, height: 40 }} />
          <Text>Chats</Text>
        </View>
        
        {/* Updates */}
        <View style={{ alignItems: 'center' }}> 
          <Image source={require('./assets/WhatsApp-LowerMenu-Updates.png')} style={{ width: 40, height: 40 }} />
          <Text>Updates</Text>
        </View>
        
        {/* Communities */}
        <View style={{ alignItems: 'center' }}> 
          <Image source={require('./assets/WhatsApp-LowerMenu-Communities.png')} style={{ width: 40, height: 40 }} />
          <Text>Communities</Text>
        </View>

        {/* Calls */}
        <View style={{ alignItems: 'center' }}> 
          <Image source={require('./assets/WhatsApp-LowerMenu-Calls.png')} style={{ width: 40, height: 40 }} />
          <Text>Calls</Text>
        </View>

      </View>

      
      <View style={{height: '2%'}}>
        <Text>Alert</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  appHeading: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "10%",
    paddingTop: 35,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  whatsAppLogo: {
    fontSize: 24,
    color: '#1FAB61',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  chatBox: {
    backgroundColor: "ffffff",
    width: '100%',
    height: 80,
    padding: 10,
    flexDirection: 'row',
  },

  userImg: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
});
