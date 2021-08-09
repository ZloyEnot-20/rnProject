import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Carousel from './components/carousel';
import Info from './components/info'
import Main from './components/main'

export default function App() {
 
  const [mainPage, setMainPage] = React.useState(true)
if (mainPage) {
  return (
    <Main setMainPage={setMainPage} />
  );
}else{
  return <Info  />;
}
}
