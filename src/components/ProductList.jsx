import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../assets/theme';

export default function ProductList() {

  // DATA PRODUK
  const products = [
    {
      id: 1,
      name: 'Luneva Rose',
      price: 'Rp 350.000',
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de'
    },
    {
      id: 2,
      name: 'Midnight Oud',
      price: 'Rp 500.000',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f'
    },
  ];

  return (
    <ScrollView>
      {products.map((item) => (
        <View key={item.id} style={styles.card}>

          {/* GAMBAR */}
          <Image source={{ uri: item.image }} style={styles.image} />

          {/* INFO */}
          <View style={styles.info}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>

            {/* BUTTON */}
            <TouchableOpacity 
              style={styles.button}
              onPress={() => alert(item.name)} // fungsi klik
            >
              <Text style={{color: 'white'}}>Buy</Text>
            </TouchableOpacity>

          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#eee',
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 5,
    marginTop: 5,
  },
});