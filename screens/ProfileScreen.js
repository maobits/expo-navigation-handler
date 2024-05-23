import React from 'react';
import { View, Text } from 'react-native';
import Menu from '../components/Menu';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Menu navigation={navigation} />
      {/* Agregar el texto de pantalla */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen.</Text>
        {/* Puedes añadir más contenido aquí si lo deseas */}
      </View>
    </View>
  );
};

export default ProfileScreen;
