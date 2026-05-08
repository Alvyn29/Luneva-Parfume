import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ProductCard({ item, navigation }) {

  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.card}>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {item.name}
      </Text>

      <Text style={styles.price}>
        {item.price}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Detail', { product: item })
        }
      >
        <Text style={styles.buttonText}>
          View Detail
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setFavorite(!favorite)}
      >
        <Text style={styles.favorite}>
          {favorite ? '❤️ Favorited' : '🤍 Favorite'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    width: 170,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 12,
    marginRight: 15,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  image: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },

  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },

  price: {
    marginTop: 5,
    color: '#D4AF37',
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  favorite: {
    marginTop: 10,
    textAlign: 'center',
  },

});