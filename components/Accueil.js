// Accueil.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Accueil = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={['#D6E4F0', '#AFCDFF', '#FFFFFF']}
      style={styles.container}
    >
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <MaterialCommunityIcons name="star-shooting" size={80} color="#091C3A" />
        <Text style={styles.title}>✨ Réalise tes Rêves ✨</Text>
        <Text style={styles.subtitle}>
          Organise, priorise et accomplis tes objectifs avec passion 💡
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Liste')} 
        >
          <Text style={styles.buttonText}>Commencer 🎯</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#091C3A',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Avenir',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'Avenir',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#091C3A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#091C3A',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Accueil;
