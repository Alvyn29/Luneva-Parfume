import React from 'react';
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
            
            {/* CARD 1 */}
            <View style={styles.card}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Luneva Rose</Text>
              <Text style={styles.price}>Rp 350K</Text>

              {/* tombol interaksi */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Luneva Rose dipilih')} // fungsi klik
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
            </View>

            {/* CARD 2 */}
            <View style={styles.card}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1594035910387-fea47794261f' }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>Midnight Oud</Text>
              <Text style={styles.price}>Rp 500K</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => alert('Midnight Oud dipilih')} // fungsi klik
              >
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>

        {/* ===== NEW ARRIVALS ===== */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>

          <View style={styles.listItem}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // putih clean
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
    backgroundColor: '#F7F7F7', // abu soft
    marginLeft: 20,
    borderRadius: 15,
    padding: 10,
    width: 150,

    // shadow biar elegan
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
    color: '#D4AF37', // gold accent
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