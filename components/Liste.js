import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Modal, FlatList, TouchableOpacity } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';  

export default function App() {
  const [newGoal, setNewGoal] = useState('');
  const [goals, setGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState(null);

  const addGoal = () => {
    if (newGoal.trim() === '') {
      setErrorMessage("L'objectif ne peut pas être vide.");
      setModalVisible(true);
      return;
    }
    if (editingIndex !== null) {
      const updatedGoals = [...goals];
      updatedGoals[editingIndex] = newGoal;
      setGoals(updatedGoals);
      setEditingIndex(null);
    } else {
      setGoals([...goals, newGoal]);
    }
    setNewGoal('');
  };

  const confirmDeleteGoal = (index) => {
    setGoalToDelete(index);
    setDeleteModalVisible(true);
  };

  const removeGoal = () => {
    if (goalToDelete !== null) {
      setGoals(goals.filter((_, i) => i !== goalToDelete));
    }
    setDeleteModalVisible(false);
    setGoalToDelete(null);
  };

  return (
    <LinearGradient
      colors={['#D6E4F0', '#AFCDFF', '#FFFFFF']}
      style={styles.container}
    >
      <FlatList
        data={goals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => { setNewGoal(item); setEditingIndex(index); }} style={styles.buttonEdit}>
                <MaterialIcons name="edit" size={24} color="#fff" />
              </Button>
              <Button onPress={() => confirmDeleteGoal(index)} style={styles.buttonDelete}>
                <MaterialIcons name="delete" size={24} color="#fff" />
              </Button>
            </Card.Actions>
          </Card>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrez un objectif"
          value={newGoal}
          onChangeText={setNewGoal}
        />
        <Button mode="contained" onPress={addGoal} style={styles.addButton}>
          {editingIndex !== null ? 'Modifier' : 'Ajouter'}
        </Button>
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{errorMessage}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={deleteModalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Voulez-vous vraiment supprimer cet objectif ?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={() => setDeleteModalVisible(false)} style={[styles.modalButton, { backgroundColor: '#7f8c8d' }]}>
                <Text style={styles.modalButtonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={removeGoal} style={[styles.modalButton, { backgroundColor: '#e74c3c' }]}>
                <Text style={styles.modalButtonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#FCFBFF',
    margin: 10,
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 8,
  },
  buttonEdit: {
    backgroundColor: '#f39c12', 
    marginRight: 10,
    borderWidth: 0,
  },
  buttonDelete: {
    backgroundColor: '#e74c3c', 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  addButton: {
    backgroundColor: '#091C3A',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
