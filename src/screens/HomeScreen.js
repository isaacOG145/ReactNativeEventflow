import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Sidebar from '../components/Sidebar';
import CustomHeader from '../components/CustomHeader';
import ActivityCard from '../components/ActivityCard';
import ModalComponent from '../components/ModalComponent';
import BottomNav from '../components/BottomNav';
import { getUserProfile, getWorkshopsForUser } from '../config/api';


export default function HomeScreen({ navigation }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const loadData = async () => {
    try {
      const user = await getUserProfile();
      const workshopsData = await getWorkshopsForUser(user.userId);

      if (workshopsData.type === 'SUCCESS') {
        setWorkshops(workshopsData.result);
      }
    } catch (error) {
      console.error("Error al cargar datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const openInscription = () => {
    setShowModal(true)
  }

  const closeInscription = () => {
    setShowModal(false)
  }




  return (
    <View style={styles.container}>
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Talleres disponibles para ti</Text>

        {loading ? (
          <Text>Cargando talleres...</Text>
        ) : (
          workshops.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
              onPressBlue={openInscription}
              textBlue="Inscribirse"
            />
          ))
        )}


      </ScrollView>

      <BottomNav navigation={navigation} onMenuPress={() => setSidebarVisible(true)} />
      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} navigation={navigation} />



      <ModalComponent
        show={showModal}
        onClose={closeInscription}
        title="Confirmación"
      >
        <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
          Modal funcionando correctamente ✅
        </Text>
      </ModalComponent>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingBottom: 30,
  },
  scrollContent: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
