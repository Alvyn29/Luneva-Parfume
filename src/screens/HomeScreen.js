import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {

  const products = [
    {
      id: 1,
      name: 'Luneva Rose',
      price: 'Rp 350K',
      image:
        'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800',
    },

    {
      id: 2,
      name: 'Luneva Oud',
      price: 'Rp 500K',
      image:
        'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800',
    },

    {
      id: 3,
      name: 'Luneva Breeze',
      price: 'Rp 300K',
      image:
        'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800',
    },

    {
      id: 4,
      name: 'Luneva Essence ',
      price: 'Rp 450K',
      image:
        'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800',
    },

    {
      id: 5,
      name: 'Luneva Bloom',
      price: 'Rp 400K',
      image:
        'https://images.unsplash.com/photo-1593487568720-92097fb460fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>

          <Text style={styles.brand}>
            LUNEVA
          </Text>

          <Text style={styles.tagline}>
            Where Elegance Meets Fragrance
          </Text>

        </View>

        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200',
          }}
          style={styles.banner}
        />

        <Text style={styles.sectionTitle}>
          Best Seller
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >

          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              navigation={navigation}
            />
          ))}

        </ScrollView>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    alignItems: 'center',
    marginTop: 15,
  },

  brand: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 4,
  },

  tagline: {
    color: '#777',
    marginTop: 5,
  },

  banner: {
    width: '90%',
    height: 220,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 20,
  },

});