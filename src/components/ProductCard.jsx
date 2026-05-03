import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ item }) {

  // STATE untuk menyimpan status favorit
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.card}>

      {/* PROPS: ambil data dari parent */}
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      {/* STATE: tombol interaksi */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setFavorite(!favorite)} // ubah state
      >
        <Text style={{ color: 'white' }}>
          {favorite ? '❤️ Favorited' : '🤍 Add Favorite'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: '#D4AF37',
  },
  button: {
    backgroundColor: '#0F0F0F',
    padding: 8,
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
  },
});