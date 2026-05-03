import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  // ===== DATA (PROPS SOURCE) =====
  const products = [
    {
      id: 1,
      name: 'Luneva Rose',
      price: 'Rp 350K',
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
    },
    {
      id: 2,
      name: 'Midnight Oud',
      price: 'Rp 500K',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <Text style={styles.title}>LUNEVA</Text>
        <Text style={styles.subtitle}>
          Where Elegance Meets Fragrance
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ===== BANNER ===== */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
          }}
          style={styles.banner}
        />

        {/* ===== BEST SELLER ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Seller</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}

          </ScrollView>
        </View>

        {/* ===== NEW ARRIVALS ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>

          <View style={styles.listItem}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1543422655-ac1c6ca993ed' }}
              style={styles.listImage}
            />
            <View>
              <Text style={styles.cardTitle}>Ocean Breeze</Text>
              <Text style={styles.price}>Rp 300K</Text>
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

//
// ===== COMPONENT (PROPS + STATE) =====
//
function ProductCard({ item }) {

  // STATE → interaksi favorit
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      {/* PROPS */}
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      {/* STATE */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setFavorite(!favorite)}
      >
        <Text style={styles.buttonText}>
          {favorite ? '❤️ Favorit' : '🤍 Favorit'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

//
// ===== STYLES (INI YANG TADI BIKIN ERROR) =====
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    alignItems: 'center',
    marginTop: 10,
  },

  title: {
    color: '#0F0F0F',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  subtitle: {
    color: '#555',
    fontSize: 12,
  },

  banner: {
    width: '90%',
    height: 180,
    borderRadius: 15,
    alignSelf: 'center',
    marginVertical: 20,
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    color: '#0F0F0F',
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: '600',
  },

  card: {
    backgroundColor: '#F7F7F7',
    marginLeft: 20,
    borderRadius: 15,
    padding: 10,
    width: 150,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },

  cardTitle: {
    color: '#0F0F0F',
    marginTop: 5,
    fontWeight: 'bold',
  },

  price: {
    color: '#D4AF37',
    marginVertical: 3,
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#D4AF37',
    padding: 6,
    borderRadius: 8,
    marginTop: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  listItem: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  listImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
});