import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function BottomNav({ navigation, onMenuPress }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/hogar.png')} style={styles.navIconImage} />
        <Text style={styles.navText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MisEventos')}>
        <Image source={require('../../assets/entrada-active.png')} style={styles.navIconImage} />
        <Text style={styles.navText}>Mis eventos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={onMenuPress}>
        <Image source={require('../../assets/menu-active.png')} style={styles.navIconImage} />
        <Text style={styles.navText}>Menú</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10
  },
  navItem: { alignItems: 'center' },
  navText: { color: 'white', fontSize: 12, marginTop: 5 },
  navIconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: 'white'
  }
});
