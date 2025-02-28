import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  

const Accueil = () => {
  return (
    <LinearGradient
      colors={['#F4F0FF', '#F0F7FF', '#FBFCE0']} 
      style={styles.container}
    >
      <Text style={styles.text}>Bienvenue sur l'Accueil</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default Accueil;
