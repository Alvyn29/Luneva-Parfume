import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function DetailScreen({ route, navigation }) {

  const { product } = route.params;

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <View style={styles.content}>

        <Text style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          {product.price}
        </Text>

        <Text style={styles.description}>
          Premium fragrance with elegant floral and woody notes.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Add To Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.profileLink}>
            Go To Profile
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  image: {
    width: '100%',
    height: 400,
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  price: {
    color: '#D4AF37',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 15,
    color: '#666',
    lineHeight: 24,
  },

  button: {
    backgroundColor: '#111',
    marginTop: 25,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  profileLink: {
    textAlign: 'center',
    marginTop: 20,
    color: '#D4AF37',
  },

});