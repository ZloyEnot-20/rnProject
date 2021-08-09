import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
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

const Flights = ({ setMainPage,setFavourite, favourite, id }) => {
  const [checked, setChecked] = React.useState(true);

  const handleFavourite = () => {
    setChecked((prev) => !prev);
    setFavourite(favourite.filter(i=> i !== id))
  };

  const handleFlight = () => {
    setMainPage((prev) => !prev);
  };

  return (
    <View style={styles.flightItem}>
      <View style={styles.top}>
        <View style={styles.plane}>
          <View style={styles.planeCircle}>
            <FontAwesome name="plane" size={30} color="#1157A7" />
          </View>
        </View>

        <View style={styles.flightInfo}>
          <TouchableHighlight onPress={handleFlight}>
            <View style={styles.info}>
              <Text>Moscow to New York</Text>
              <Text style={{ fontSize: 15, color: '#878787' }}>
                VKO -- 28 June, 2020 -- 14:50
              </Text>
              <Text style={{ fontSize: 15, color: '#878787' }}>
                Aeroflot
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={handleFavourite}
            style={{ alignSelf: 'flex-start', marginTop: 10, marginRight: 5 }}
          >
            <FontAwesome
              name={checked ? 'heart' : 'heart-o'}
              size={17}
              color="red"
            />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{ textAlign: 'center' }}>Price: 23 311 ₽</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  flightItem: {
    height: 135,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 20,
    flexDirection: 'column',
  },
  top: {
    flex: 2,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(196, 196, 196, 0.5)',
  },
  bottom: {
    flex: 1,
    paddingRight: 17,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  plane: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  planeCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 119, 255, 0.05)',
  },
  flightInfo: {
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Flights;
