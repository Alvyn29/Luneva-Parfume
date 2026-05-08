import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {

  return (
    <ScrollView style={styles.container}>

      {/* ===== HEADER PROFILE ===== */}
      <View style={styles.header}>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          Luneva Customer
        </Text>

        <Text style={styles.email}>
          customer@luneva.com
        </Text>

      </View>

      {/* ===== MEMBERSHIP CARD ===== */}
      <View style={styles.membershipCard}>

        <Text style={styles.membershipTitle}>
          Gold Member
        </Text>

        <Text style={styles.membershipText}>
          Enjoy exclusive perfume collections and special discounts.
        </Text>

      </View>

      {/* ===== MENU ===== */}
      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🛍️</Text>

          <Text style={styles.menuText}>
            Order History
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❤️</Text>

          <Text style={styles.menuText}>
            Favorite Products
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>📍</Text>

          <Text style={styles.menuText}>
            Shipping Address
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>

          <Text style={styles.menuText}>
            Settings
          </Text>
        </TouchableOpacity>

      </View>

      {/* ===== PROMO CARD ===== */}
      <View style={styles.promoCard}>

        <Text style={styles.promoTitle}>
          Special Offer ✨
        </Text>

        <Text style={styles.promoText}>
          Get 20% discount for your next luxury fragrance purchase.
        </Text>

        <TouchableOpacity style={styles.promoButton}>
          <Text style={styles.promoButtonText}>
            Claim Now
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    alignItems: 'center',
    marginTop: 60,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#D4AF37',
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#111',
  },

  email: {
    color: '#777',
    marginTop: 5,
    fontSize: 14,
  },

  membershipCard: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 25,
    padding: 25,
  },

  membershipTitle: {
    color: '#D4AF37',
    fontSize: 22,
    fontWeight: 'bold',
  },

  membershipText: {
    color: '#EEE',
    marginTop: 10,
    lineHeight: 22,
  },

  menuContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  menuItem: {
    backgroundColor: '#F8F8F8',
    padding: 18,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  menuIcon: {
    fontSize: 20,
    marginRight: 15,
  },

  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },

  promoCard: {
    backgroundColor: '#D4AF37',
    margin: 20,
    borderRadius: 25,
    padding: 25,
    marginBottom: 40,
  },

  promoTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  promoText: {
    color: '#FFF',
    marginTop: 10,
    lineHeight: 22,
  },

  promoButton: {
    backgroundColor: '#111',
    paddingVertical: 12,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },

  promoButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

});