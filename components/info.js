import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Carousel from './carousel';
import {styles} from '../style/style.js'

 const Info = () => {
      
    return (
      <View style={styles.container}>
        <View style={styles.topBlock}>
          <Image style={styles.image} source={require('../assets/plane.png')} />
        </View>
        <View style={styles.bottomBlock}>
          <View style={styles.infoBlock}>
            <View style={styles.wrapper}>
              <View style={styles.directions}>
                <View style={styles.origin}>
                  <Text>1 Aug, 2020</Text>
                  <Text style={styles.directionInitials}>SVO</Text>
                  <Text>Moscow</Text>
                </View>
                <View
                  style={[
                    styles.origin,
                    { justifyContent: 'center', alignItems: 'center' },
                  ]}
                >
                  <View style={styles.arrow}></View>
                </View>
                <View style={styles.origin}>
                  <Text>11:45</Text>
                  <Text style={styles.directionInitials}>JFK</Text>
                  <Text>New York</Text>
                </View>

                <FontAwesome
                  name='heart'
                  size={17}
                  color="red"
                />
              </View>
              <View style={styles.prices}>
                <View style={styles.priceBlock}>
                  <View
                    style={[
                      styles.priceBlockInfo,
                      {
                        borderRightColor: 'white',
                        borderRightWidth: 1,
                        height: 50,
                      },
                    ]}
                  >
                    <Text style={styles.priceBlockInfoFonts}>Price</Text>
                    <Text
                      style={[styles.priceBlockInfoFonts, { fontSize: 20 }]}
                    >
                      23 311 ₽
                    </Text>
                  </View>
                  {/* <View style={styles.highLine}></View> */}
                  <View style={styles.priceBlockInfo}>
                    <Text style={styles.priceBlockInfoFonts}>Boarding</Text>
                    <Text
                      style={[styles.priceBlockInfoFonts, { fontSize: 20 }]}
                    >
                      19:20
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Carousel />
          </View>
        </View>
      </View>
    );
}

export default Info