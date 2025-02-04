import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, Image, FlatList } from 'react-native';

export default function App() {
  
  // Create sample data for the chat list
  const chatList = [
    {id:1, image: require('./assets/User-John.jpg'), name: 'John', message: 'Hello there!', date: '2024-12-30'},
    {id:2, image: require('./assets/User-Alice.jpg'), name: 'Alice', message: 'How are you today.', date: '2024-10-25'},
    {id:3, image: require('./assets/User-Peter.jpg'), name: 'Peter', message: 'Did you get my email', date: '2024-11-27'},
    {id:4, image: require('./assets/User-Smith.jpg'), name: 'Smith', message: 'I use Arch BTW.', date: '2024-12-29'},
    {id:5, image: require('./assets/User-Brian.jpg'), name: 'Brian', message: 'Great hearing from you have a nice day', date: '2024-12-30'},
    {id: 6, image: require('./assets/User-Sara.jpg'), name: 'Sara', message: 'See you at the meeting.', date: '2024-12-31'},
    {id: 7, image: require('./assets/User-Michael.jpg'), name: 'Michael', message: 'Just finished the project.', date: '2024-11-20'},
    {id: 8, image: require('./assets/User-Diana.jpg'), name: 'Diana', message: 'Happy Birthday!', date: '2024-10-05'},
    {id: 9, image: require('./assets/User-Kevin.jpg'), name: 'Kevin', message: 'Let’s catch up soon.', date: '2024-12-15'},
    {id: 10, image: require('./assets/User-Generic.png'), name: 'Linda', message: 'I got the tickets!', date: '2024-09-18'},
    {id: 11, image: require('./assets/User-Generic.png'), name: 'Tom', message: 'Call me when you’re free.', date: '2024-10-22'},
    {id: 12, image: require('./assets/User-Generic.png'), name: 'Nina', message: 'Lunch tomorrow?', date: '2024-12-01'},
    {id: 13, image: require('./assets/User-Generic.png'), name: 'George', message: 'Check your inbox.', date: '2024-11-09'},
    {id: 14, image: require('./assets/User-Generic.png'), name: 'Victor', message: 'Game night this weekend?', date: '2024-12-07'},
    {id: 15, image: require('./assets/User-Generic.png'), name: 'Emma', message: 'I loved the movie!', date: '2024-08-30'},
  ];

  // Create Alert function Here
  const showAlert = () => {
    Alert.alert('Welcome to WhatsApp', 'This is a simple WhatsApp clone created using React Native');
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

      {/* Lower Section: Menu */}
      <View style={styles.navBar}>
        
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

      {/* Alert (On top of navbar) */}
      <View style={{height: '5%', paddingBottom: '0%', fontSize: 5}}>
        <Button title="Alert" onPress={showAlert} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

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

  navBar: {
    width: '100%',
    height: '5%',
    paddingTop: '1%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
