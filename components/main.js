import React from 'react';
import Flights from './flights';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
const { width } = Dimensions.get('window');

const height = (width * 100) / 60;

const Main = ({ setMainPage}) => {


  const goToPage = () => {
    setMainPage((prev) => !prev);
  };

  const touch = () => {
    console.log('touched');
  };

  const price = '23 311 ₽';
  const [favourite,setFavourite] = React.useState([0, 1, 2, 3, 4, 5])
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.title}>
        <View style={styles.flights}>
          <Text style={{ fontSize: 17, textAlign: 'center' }}>Flights</Text>
        </View>
        <View style={styles.tabs}>
          <TouchableHighlight onPress={touch}>
            <Text style={styles.favourites}>Favourites</Text>
          </TouchableHighlight>
          <Text style={styles.browse}>Browse</Text>
        </View>
      </View>
      <View style={styles.allFlights}>
        <ScrollView
          style={{ height, width: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          {favourite.map((id) => (
            <Flights setMainPage={setMainPage} favourite={favourite} id={id} setFavourite={setFavourite} key={id} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  title: {
    overflow: 'hidden',
    flex: 1,
    textAlign: 'center',
    backgroundColor: 'yellow',
    paddingBottom: 4,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 2,
    // flexDirection: 'row',
  },
  flights: {
    flex: 3,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tabs: {
    flex: 2,
    fontSize: 17,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  favourites: {
    borderBottomColor: '#1157A7',
    borderBottomWidth: 3,
    width: '100',
  },
  browse: {
    borderBottomColor: '#1157A7',
    borderBottomWidth:3,
    width: '100',
  },
  allFlights: {
    flex: 5,
    overflow: 'hidden',
    backgroundColor: '#F8F8F8',
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
  },
  info: {
    fontSize: 23,
    paddingLeft: 15,
  },
});
export default Main;
